module.exports = function(req, res, next) {
  next(undefined, res['_locals']);
}
