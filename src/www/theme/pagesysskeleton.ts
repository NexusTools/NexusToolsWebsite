import { PageSystemSkeleton, Request, Response } from "nexusframework/types";

const _export: PageSystemSkeleton = function(template, options, req, res, next: (err: Error, data?: any) => void) {
  req.logger.warn("Rendering skeleton for page system...");
  res.render(template, options, function(err, html) {
    if (err) {
      req.logger.error(err);
      next(err);
    } else
      next(undefined, {
        title: options.title,
        loader: res.getLoaderData(),
        page: html
      });
  });
}
export = _export;
