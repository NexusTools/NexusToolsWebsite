module.exports = function(logger) {
  logger.info("Creating crossorigin handler");

  return function(req, res, next) {
    req.pluralize = function(count, text, suffix) {
      if(count == 1)
        return count + " " + text;
      return count + " " + text + (suffix = suffix || "s");
    }

    next();
  }
}
