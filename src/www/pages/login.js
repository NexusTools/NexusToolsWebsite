"use strict";
var passport = require("passport");
var _export = function (req, res, next) {
    passport.authenticate('google', { scope: ['email'] })(req, res, function (err) {
        if (err) {
            next(err);
            return;
        }
        res.redirect("/");
    });
};
module.exports = _export;
//# sourceMappingURL=login.js.map