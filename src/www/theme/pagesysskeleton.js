"use strict";
var _export = function (template, options, req, res, next) {
    res.render(template, options, function (err, html) {
        if (err)
            next(err);
        else
            next(undefined, {
                title: (options.title || "Title Missing") + " - NexusTools",
                loader: res.getLoaderData(),
                page: html
            });
    });
};
module.exports = _export;
//# sourceMappingURL=pagesysskeleton.js.map