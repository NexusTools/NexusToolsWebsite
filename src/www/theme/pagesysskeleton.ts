import { nexusframework } from "nexusframework/types";

const _export: nexusframework.PageSystemSkeleton = function(template: string, options: any, req: nexusframework.Request, res: nexusframework.Response, next: (err: Error, data?: any) => void) {
    res.render(template, options, function(err, html) {
        if (err)
            next(err);
        else
            next(undefined, {
                title: (options.title || "Title Missing") + " - NexusTools",
                loader: res.getLoaderData(),
                page: html
            });
    });
}
export = _export;