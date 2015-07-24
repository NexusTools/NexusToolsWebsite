(function($, global) {
  function PageSys() {
  }
  PageSys.BASEURL = "//jvm.nexustools.com/";
  
  PageSys.prototype.handleError = function(err, forElement) {
    console.error("Unrecoverable error occured", err);
  }
  
  var loadedClasses = [];
  var jvm = global.$currentJVM;
  var pageElement = $(".page");
  PageSys.prototype.startController = function(controller, forElement) {
    if(!forElement)
      forElement = pageElement;
    
    var self = this;
    var controllerClass = "net/nexustools/website/pages/" + controller;
    var controllerBase = PageSys.BASEURL + controllerClass;
    jQuery.get(controllerBase + ".libs.json").done(function(data) {
      console.log("Loading dependencies", controller, data);
      
      async.each(data, function(lib, cb) {
        if(loadedClasses.indexOf(lib) != -1)
          return cb();
        loadedClasses.push(lib);
        
        jQuery.get(PageSys.BASEURL + lib + ".js").done(function(data) {
          /*try {
            console.log("Processing dependency", lib);
            eval(data);
            cb();
          } catch(e) {
            cb(e);
          }*/
          cb();
        }).fail(cb);
      }, function(err) {
        if(err) return self.handleError(err, forElement);
        
        var handler = jvm.ClassLoader.loadClassImpl(controllerClass).$new();
        var onLoad = jvm.ClassLoader.lookupImpl(handler, "onLoad$(Ljava/lang/String;[Ljava/lang/String;Ljava/util/Map;Lnet/nexustools/website/PageHandler$LoadCallback;)V");
        var onReady = jvm.ClassLoader.lookupImpl(handler, "onReady$(Ljava/lang/String;[Ljava/lang/String;Ljava/util/Map;Lnet/nexustools/jvm/webdocument/dom/WebElement;Ljava/lang/Runnable;)V");
        var onUnload = jvm.ClassLoader.lookupImpl(handler, "onUnload$(Ljava/lang/Runnable;)V");
        
        console.log(handler, onLoad, onReady, onUnload);
      });
    }).fail(function(err) {
      self.handleError(err, forElement);
    });
  }
  
  global.PageSystem = new PageSys();
  console.log(global);
})(jQuery, this);
