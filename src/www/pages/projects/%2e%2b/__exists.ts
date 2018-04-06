import { Request, Response } from "nexusframework/types";
import project = require("../../../theme/project.js");

export = function(req: Request, res: Response, exists, skip) {
  if (req.match[0].toLowerCase() !== req.match[0]) {
    skip();
    return;
  }

  if (req.match[0] == "nexusframework" || req.match[0] == "jvm.js")
    skip();
  else
    project("NexusTools", req.match[0], function(err, data) {
      res['_locals'] = data;
      exists(err);
    }, skip);
}
