import { RequestHandler, User as _User } from "nexusframework/types";

import passport = require('passport');

const _export: RequestHandler = function (req, res, next) {
  passport.authenticate('google', {scope: ['email']})(req, res, function (err) {
    if (err) {
      next(err);
      return;
    }

    res.redirect("/");
  });
}

export = _export;
