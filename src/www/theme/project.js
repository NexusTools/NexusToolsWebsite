"use strict";
/// <reference types="node" />
var LRU = require("lru-weak-cache");
var request = require("request");
var marked = require("marked");
var striptags = require("striptags");
var async = require("async");
var url = require("url");
var HOUR = 1000 * 60 * 60;
var APIURL = "https://";
try {
    var AUTH = require(__dirname + "/../../../auth/github.json");
    APIURL += AUTH.user;
    APIURL += ":";
    APIURL += AUTH.pass;
    APIURL += "@";
}
catch (e) {
    console.warn(e);
}
APIURL += "api.github.com";
var cache = new LRU({ capacity: 200, minAge: 600000, maxAge: 7.2e+6 });
var readmeVariants = ["README.md", "README.MD", "readme.MD", "readme.md"];
var generator = function (RepoID, cb) {
    var RAWURL = 'https://raw.githubusercontent.com/' + RepoID + '/master/';
    var renderer = new marked.Renderer();
    var link = renderer.link.bind(renderer);
    renderer.link = function (href, title, text) {
        return link(url.resolve(RAWURL, href), title, text);
    };
    var image = renderer.image.bind(renderer);
    renderer.image = function (href, title, text) {
        return image(href, title, text).replace(/img /, "img class=\"img-fluid\" ");
    };
    var options = {
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    };
    var headers = {
        'User-Agent': 'Mozilla/5.0 (Headless; rv:29.0) Gecko/20180404 Request/NodeJS'
    };
    var githubRepoState = {};
    var _next = function () {
        async.parallel([
            function (cb) {
                request({
                    url: APIURL + '/repos/' + RepoID + '/releases',
                    headers: headers
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        try {
                            var ReleaseData = JSON.parse(body);
                            if ((githubRepoState.ReleaseCount = ReleaseData.length) > 0) {
                                githubRepoState.ReleaseAssets = {};
                                var Release = ReleaseData[0];
                                githubRepoState.ZipReleaseURL = "https://github.com/" + RepoID + "/archive/" + Release.tag_name + ".zip";
                                githubRepoState.TarGZReleaseURL = "https://github.com/" + RepoID + "/archive/" + Release.tag_name + ".tar.gz";
                                Release.assets.forEach(function (asset) {
                                    githubRepoState.ReleaseAssets[asset.name] = asset.browser_download_url;
                                });
                            }
                            cb();
                        }
                        catch (e) {
                            cb(e);
                        }
                    }
                    else if (error)
                        cb(error);
                    else
                        cb(new Error("Server returned status code " + response.statusCode));
                });
            },
            function (cb) {
                var downloadReadme = function (filename, _cb) {
                    request({
                        url: RAWURL + filename,
                        headers: headers
                    }, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            try {
                                marked.setOptions(options);
                                var README = marked(body);
                                var startH = README.indexOf("<h");
                                if (startH != -1) {
                                    var endH = README.indexOf("</h", startH);
                                    if (startH > 0)
                                        README = README.substring(0, startH) + README.substring(endH + 5);
                                    else
                                        README = README.substring(endH + 5);
                                }
                                var description = striptags(README, [], "").replace(/(\n|\s+)/g, " ").trim().substring(0, 161);
                                if (description.length > 160)
                                    description = description.substring(0, 160) + "...";
                                githubRepoState.description = description;
                                githubRepoState.README = README;
                                cb();
                            }
                            catch (e) {
                                console.warn(e);
                                _cb(e);
                            }
                        }
                        else if (error)
                            _cb(error);
                        else
                            _cb(new Error("Server returned status code " + response.statusCode));
                    });
                };
                async.eachSeries(readmeVariants, function (readme, next) {
                    downloadReadme(readme, next);
                }, function () {
                    githubRepoState.README = "No valid readme found.";
                    cb();
                });
            },
            function (cb) {
                request({
                    url: APIURL + '/repos/' + RepoID + '/issues',
                    headers: headers
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        try {
                            githubRepoState.IssueCount = JSON.parse(body).length;
                        }
                        catch (e) {
                            cb(e);
                            return;
                        }
                        cb();
                    }
                    else if (error)
                        cb(error);
                    else
                        cb(new Error("Server returned status code " + response.statusCode));
                });
            },
            function (cb) {
                request({
                    url: APIURL + '/repos/' + RepoID + '/branches',
                    headers: headers
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        try {
                            githubRepoState.BranchCount = JSON.parse(body).length;
                        }
                        catch (e) {
                            cb(e);
                            return;
                        }
                        cb();
                    }
                    else if (error)
                        cb(error);
                    else
                        cb(new Error("Server returned status code " + response.statusCode));
                });
            }
        ], function (err) {
            cb(err, githubRepoState);
        });
    };
    var fetchStats = function () {
        request({
            url: APIURL + '/repos/' + RepoID + '/stats/contributors',
            headers: headers
        }, function (error, response, body) {
            if (response && response.statusCode)
                switch (response.statusCode) {
                    case 202:
                        setTimeout(fetchStats, 500);
                        break;
                    case 404:
                        cb(undefined, {});
                        break;
                    case 200:
                        try {
                            var data = JSON.parse(body);
                            githubRepoState.CommitCount = 0;
                            githubRepoState.ContributorCount = 0;
                            data.forEach(function (contributor) {
                                githubRepoState.CommitCount += contributor.total;
                                githubRepoState.ContributorCount++;
                            });
                            _next();
                        }
                        catch (e) {
                            cb(e);
                        }
                        break;
                    default:
                        cb(new Error("Server returned error code " + response.statusCode));
                }
            else
                cb(error);
        });
    };
    fetchStats();
};
module.exports = function (owner, repo, next, skip) {
    cache.generate(owner + "/" + repo, generator, function (err, data) {
        if (err)
            next(err);
        else if (data.CommitCount)
            next(null, {
                title: repo,
                Branch: "master",
                README: data.README,
                IssueCount: data.IssueCount,
                ZipReleaseURL: data.ZipReleaseURL,
                ContributorCount: data.ContributorCount,
                TarGZReleaseURL: data.TarGZReleaseURL,
                ReleaseAssets: data.ReleaseAssets,
                ReleaseCount: data.ReleaseCount,
                BranchCount: data.BranchCount,
                CommitCount: data.CommitCount,
                RepoID: owner + "/" + repo,
                meta: {
                    description: data.description
                }
            });
        else
            skip();
    });
};
//# sourceMappingURL=project.js.map