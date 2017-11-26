import { nexusframework } from "nexusframework/types";

const ver = "1.1";

const _export: nexusframework.RequestHandler = function(req, res, next) {
    delete res.locals.title;
    
    res.addNexusFrameworkClient();
    res.addScript("//code.jquery.com/jquery-3.2.1.slim.min.js", "3.2.1");
    res.addScript("//unpkg.com/popper.js@1.12.6/dist/umd/popper.min.js", "4.0.2", "jquery");
    res.addScript("//unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/js/bootstrap-material-design.min.js", "4.0.2", "jquery", "popper");
    res.addScript("//js.nexustools.com/script.js?v=" + ver, ver, "nexusframework", "bootstrap-material-design");
    
    res.addGoogleFont("Roboto", 300);
    res.addGoogleFont("Roboto", 400);
    res.addGoogleFont("Roboto", 500);
    res.addGoogleFont("Roboto", 700);
    
    res.addStyle("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css", "4.3.0");
    
    res.addStyle("//unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/css/bootstrap-material-design.min.css", "4.0.2");
    res.addStyle("//css.nexustools.com/nexustools.css?v=" + ver, ver, "bootstrap-material-design");
    
    res.addHeaderRenderer(function(out) {
        out.write('<meta name="viewport" content="width=device-width, initial-scale=1" />');
    });
    
    res['locals'].pluralize = req['pluralize'] = function(count: number, text: string, suffix?: string) {
      if(count == 1)
        return count + " " + text;
      return count + " " + text + (suffix = suffix || "s");
    }
    
    res.locals.progressContainerHead = '<div class="loader-progress-heading">NexusTools<br /><small>Loading Please Wait</small></div>';
    next();
}
export = _export;