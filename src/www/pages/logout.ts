import { RequestHandler, User as _User } from "nexusframework/types";

const _export: RequestHandler = function (req, res, next) {
  req['session'].destroy();
  res.redirect("/");
}

export = _export;
