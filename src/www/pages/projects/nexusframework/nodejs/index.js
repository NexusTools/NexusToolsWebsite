const handler = require(__dirname + "/../../../../theme/project.js");;

module.exports = function(req, res, next) {
  handler("NexusFramework", "NexusFramework", next, next);
}
