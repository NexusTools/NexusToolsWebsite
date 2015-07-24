var request = require("request");
var marked = require("marked");
var url = require("url");

var HOUR = 1000 * 60 * 60;
var APIURL = "https://";
try {
  var AUTH = require(__dirname + "/../../../auth/github.json");
  APIURL += AUTH.user;
  APIURL += ":";
  APIURL += AUTH.pass;
  APIURL += "@";
} catch(e) {
  console.warn(e);
}
APIURL += "api.github.com";

module.exports = function(owner, repo) {
  var RepoID = owner + "/" + repo;
  var RAWURL = 'https://raw.githubusercontent.com/' + RepoID + '/master/';
  var CommitCount = "?", BranchCount = "?", IssueCount = "?";
  var HasReleases = false;
  var README = "";
  
  var renderer = new marked.Renderer();
  var link = renderer.link.bind(renderer);
  renderer.link = function(href, title, text) {
    return link(url.resolve(RAWURL, href), title, text);
  }
  
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
  }
  
  var update;
  update = function() {
    request({
      url: APIURL + '/repos/' + RepoID + '/releases/latest',
      headers: headers
    }, function (error, response, body) {
      HasReleases = !error && response.statusCode == 200;
    });
    request({
      url: APIURL + '/repos/' + RepoID + '/branches',
      headers: headers
    }, function (error, response, body) {
      if(!error && response.statusCode == 200) {
        try {
          BranchCount = eval(body).length;
        } catch(e) {
          process.domain.logger.warn(e);
        }
      } else
        process.domain.logger.warn(error, response);
    });
    request({
      url: APIURL + '/repos/' + RepoID + '/issues',
      headers: headers
    }, function (error, response, body) {
      if(!error && response.statusCode == 200) {
        try {
          IssueCount = eval(body).length;
        } catch(e) {
          process.domain.logger.warn(e);
        }
      } else
        process.domain.logger.warn(error, response);
    });
    request({
      url: APIURL + '/repos/' + RepoID + '/commits',
      headers: headers
    }, function (error, response, body) {
      if(!error && response.statusCode == 200) {
        try {
          CommitCount = eval(body).length;
        } catch(e) {
          process.domain.logger.warn(e);
        }
      } else
        process.domain.logger.warn(error, response);
    });
    request({
      url: RAWURL + 'README.md',
      headers: headers
    }, function (error, response, body) {
      if(!error && response.statusCode == 200) {
        try {
          marked.setOptions(options);
          README = marked(body);
        } catch(e) {
          process.domain.logger.warn(e);
        }
      } else
        process.domain.logger.warn(error, response);
    });
    setTimeout(update, HOUR + HOUR * Math.random());
  };
  setTimeout(update);
  
  return function(req, res, next) {
    next(null, {
      README: README,
      IssueCount: IssueCount,
      BranchCount: BranchCount,
      CommitCount: CommitCount,
      HasReleases: HasReleases,
      RepoID: RepoID
    });
  };
}