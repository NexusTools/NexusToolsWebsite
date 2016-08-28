var request = require("request");
var marked = require("marked");
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
} catch (e) {
	console.warn(e);
}
APIURL += "api.github.com";

module.exports = function (owner, repo, branch) {
	branch = branch || "master";
	var RepoID = owner + "/" + repo;
	var ZipReleaseURL = false, TarGZReleaseURL = false, ReleaseAssets;
	var RAWURL = 'https://raw.githubusercontent.com/' + RepoID + '/' + branch + '/';
	var CommitCount = "?", BranchCount = "?", IssueCount = "?", ReleaseCount = "?";
	var README = "";

	var renderer = new marked.Renderer();
	var link = renderer.link.bind(renderer);
	renderer.link = function (href, title, text) {
		return link(url.resolve(RAWURL, href), title, text);
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
		'User-Agent': 'Mozilla/5.0 (Headless; rv:29.0) Gecko/20120101 Request/NodeJS'
	};

	var readmeName = "README.md";
	var downloadReadme = function (filename, attemptNext) {
		request({
			url: RAWURL + filename,
			headers: headers
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try {
					marked.setOptions(options);
					README = marked(body);

					var startH = README.indexOf("<h");
					if (startH != -1) {
						var endH = README.indexOf("</h", startH);
						if (startH > 0)
							README = README.substring(0, startH) + README.substring(endH + 5);
						else
							README = README.substring(endH + 5);
					}

					readmeName = filename;
				} catch (e) {
					process.domain.logger.warn(e);
				}
			} else
				attemptNext();
		});
	}

	var update;
	var readmeVariants = ["README.md", "README.MD", "readme.md", "readme.MD"];
	update = function () {
		request({
			url: APIURL + '/repos/' + RepoID + '/releases',
			headers: headers
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try {
					var ReleaseData = JSON.parse(body);
					if(ReleaseCount = ReleaseData.length) {
						ReleaseAssets = {};
						var Release = ReleaseData[0];
						ZipReleaseURL = "https://github.com/" + RepoID + "/archive/" + Release.tag_name + ".zip";
						TarGZReleaseURL = "https://github.com/" + RepoID + "/archive/" + Release.tag_name + ".tar.gz";
						Release.assets.forEach(function(asset) {
							ReleaseAssets[asset.name] = asset.browser_download_url;
						});
					} else {
						ReleaseAssets = false;
						TarGZReleaseURL = false;
						ZipReleaseURL = false;
					}
				} catch (e) {
					process.domain.logger.warn(e);
				}
			} else
				process.domain.logger.warn(error, response);
		});
		request({
			url: APIURL + '/repos/' + RepoID + '/branches',
			headers: headers
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try {
					BranchCount = JSON.parse(body).length;
				} catch (e) {
					process.domain.logger.warn(e);
				}
			} else
				process.domain.logger.warn(error, response);
		});
		request({
			url: APIURL + '/repos/' + RepoID + '/issues',
			headers: headers
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				try {
					IssueCount = JSON.parse(body).length;
				} catch (e) {
					process.domain.logger.warn(e);
				}
			} else
				process.domain.logger.warn(error, response);
		});
		var downloadPage, curPage = 1, commitCount = 0;
		downloadPage = function() {
			request({
				url: APIURL + '/repos/' + RepoID + '/commits?sha=' + branch + '&page=' + curPage,
				headers: headers
			}, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					try {
						var commitData = JSON.parse(body);
						if(!commitData.length)
							CommitCount = commitCount;
						else {
							curPage ++;
							commitCount += commitData.length;
							downloadPage();
						}
					} catch (e) {
						process.domain.logger.warn(e);
					}
				} else
					process.domain.logger.warn(error, response);
			});
		};
		downloadPage();

		var readmeToTry = [readmeName];
		readmeVariants.forEach(function (readme) {
			if (readmeToTry.indexOf(readme) == -1)
				readmeToTry.push(readme);
		});
		async.eachSeries(readmeToTry, function (readme, next) {
			downloadReadme(readme, next);
		});

		setTimeout(update, HOUR + HOUR * Math.random());
	};
	setTimeout(update);

	return function (req, res, next) {
		next(null, {
			README: README,
			Branch: branch,
			IssueCount: IssueCount,
			ZipReleaseURL: ZipReleaseURL,
			TarGZReleaseURL: TarGZReleaseURL,
			ReleaseAssets: ReleaseAssets,
			ReleaseCount: ReleaseCount,
			BranchCount: BranchCount,
			CommitCount: CommitCount,
			RepoID: RepoID
		});
	};
};