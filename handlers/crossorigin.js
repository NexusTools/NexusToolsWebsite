module.exports = function(logger) {
  logger.info("Creating crossorigin handler");

  return function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    next();
  }
}
