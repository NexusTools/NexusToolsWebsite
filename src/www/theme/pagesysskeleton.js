"use strict";
var _export = function (template, options, req, res, next) {
    req.logger.warn("Rendering skeleton for page system...");
    res.render(template, options, function (err, html) {
        if (err) {
            req.logger.error(err);
            next(err);
        }
        else
            next(undefined, {
                title: options.title,
                loader: res.getLoaderData(),
                page: html
            });
    });
};
module.exports = _export;
//# sourceMappingURL=pagesysskeleton.js.map