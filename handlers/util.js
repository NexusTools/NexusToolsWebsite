module.exports = function(app) {
    app.enable("trust proxy");
    return function(req, res, next) {
        res['locals'].pluralize = req['pluralize'] = function (count, text, suffix) {
            if (count == 1)
                return count + " " + text;
            return count + " " + text + (suffix = suffix || "s");
        };
        res['locals'].squery = req.query.q;
        next();
    }
};
