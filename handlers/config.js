var chokidar = require("chokidar");
var fs = require("fs");

var basename = /\/([^\/]+)\.json$/;
module.exports = function(config, logger, next) {
  var _config = {};
  logger.info("Configuration", config);
  
  var watch = chokidar.watch(config.base || "config", {ignored: /[\/\\]\./});
  
  function config_changed(path) {
    var name = path.match(basename);
    if(!name)
      return;
    
    logger.info("Config file updated", name);
    fs.readFile(path, function (err, data) {
      if (err) return console.error(path, err);
      
      _config[name[1]] = JSON.parse(data.toString());
    });
  }
  watch.on('add', config_changed);
  watch.on('change', config_changed);
  watch.on('ready', function() {
    next();
  });
  
  return function(req, res, next) {
    req.config = _config;
    next();
  }
}