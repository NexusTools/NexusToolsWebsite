"use strict";
var _export = function (req, res, next) {
    req['session'].destroy();
    res.redirect("/");
};
module.exports = _export;
//# sourceMappingURL=logout.js.map