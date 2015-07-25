(function($, global) {
  function PageSys() {
    this.registeredElements = [];
  }
  PageSys.JVMBASEURL = "//jvm.nexustools.com/";
  PageSys.CONTROLLERPKG = "net/nexustools/website/pages/";
  PageSys.ANIMATIONTIME = 350;
  
  PageSys.prototype.handleError = function(err, forElement) {
    console.error("Unrecoverable error occured", err);
  }
  
  var loadedClasses = [];
  var jvm = global.$currentJVM;
  var pageElement = $("body > .page");
  var overlayElement = $("body > .overlay");
  PageSys.prototype.startJVMController = function(controller, forElement) {
    if(!forElement)
      forElement = pageElement;
    
    var self = this;
    var controllerClass = PageSys.CONTROLLERPKG + controller;
    var controllerBase = PageSys.JVMBASEURL + controllerClass;
    jQuery.get(controllerBase + ".libs.json").done(function(data) {
      console.log("Loading dependencies", controller, data);
      
      async.each(data, function(lib, cb) {
        if(loadedClasses.indexOf(lib) != -1)
          return cb();
        loadedClasses.push(lib);
        
        jQuery.get(PageSys.JVMBASEURL + lib + ".js").done(function(data) {
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
  
  PageSys.prototype.handleElements = function(target) {
    this.registeredElements.forEach(function(reg) {
      reg.handler(target.find(reg.selector));
    });
  };
  
  PageSys.prototype.registerElement = function(selector, setHandler) {
    this.registeredElements.push({
      selector: selector,
      handler: setHandler
    });
    
    setHandler($(selector));
  }
  
  var hasUrl = /^#/;
  var fullUrl = /^([^\:]+\:)?\/\/([^\/]+)(\/[^#]*)/;
  var noProtocol = /^\/\//;
  
  PageSys.prototype.init = function() {
    if(!("pushState" in history))
      return;
    
    var host = (""+location.href).match(fullUrl);

    var currentPage = host[3];
    var hostProtocol = host[1];
    var fullHost = host[1] + "//" + host[2];
    host = host[2];
    console.log(host, currentPage);

    var loadedStyles = [];
    var loadedScripts = [];

    console.log("Full host", fullHost);
    
    var resolveUrl = function(href) {
      if(!fullUrl.test(href))
        href = fullHost + href;
      else if(noProtocol.test(href))
        href = hostProtocol + href;
      return href;
    }
    $("link[rel=\"stylesheet\"]").each(function(i, link) {
      loadedStyles.push(resolveUrl($(link).attr("href")));
    });
    $("script[src]").each(function(i, script) {
      loadedScripts.push(resolveUrl($(script).attr("src")));
    });
    console.log("Loaded files", loadedStyles, loadedScripts);
    
    var heightAni = {height: pageElement.height()};
    var updateHeight = function() {
      console.log("Animating", heightAni.height);
      pageElement.css({
        "height": heightAni.height + "px"
      });
    }
    var completeHeight = function() {
      pageElement.css({
        "height": ""
      });
    }
    
    var updatePageContent = function(html) {
      pageElement.empty();
      pageElement.html(html);
      self.handleElements(pageElement);
      pageElement.removeClass("loading");
    }
    
    if(history.state == null) {
      console.log("Initializing state");
      history.replaceState([pageElement.html(), document.title, currentPage], document.title);
    }
    
    var loadtimeout;
    window.onpopstate = function(e) {
      try{clearTimeout(loadtimeout)}catch(e){}
      $("html, body").animate({ scrollTop: "0px" });
      pageElement.addClass("loading");
      document.title = e.state[1];
      currentPage = e.state[2];
      
      loadtimeout = setTimeout(function() {
        updatePageContent(e.state[0]);
      }, PageSys.ANIMATIONTIME);
    }
    
    var self = this;
    this.registerElement("a", function(set) {
      set.click(function(e) {
        var href = $(e.target).attr("href");
        if(!href)
          return;

        if(hasUrl.test(href))
          return;

        var match = href.match(fullUrl);
        if(!match)
          href = fullHost + href;
        else if(match[2] != host)
          return; // External URL

        match = href.match(fullUrl);

        console.log(match, currentPage);
        if(match[3] == currentPage) {
          e.preventDefault();
          return;
        }
        currentPage = match[3];

        var has = href.indexOf("#");
        if(has != -1)
          has = href.substring(has);
        else
          has = "";
        var pos = href.indexOf("?");
        if(pos != -1)
          href += "&notheme";
        else
          href += "?notheme";
        href += has;
        
        $("html, body").animate({ scrollTop: "0px" });
        pageElement.addClass("loading");
        document.title = "Loading...";

        var newDocument, title, overlaytimer;
        async.parallel([
          function(cb) {
            $.get(href).done(function(data) {
              newDocument = data;
              title = newDocument.match(/<title>(.+)<\/title>/)[1];
              document.title = title;
              cb();
            }).fail(function(err) {
              cb(err);
            });
          },
          function(cb) {
            try{clearTimeout(loadtimeout)}catch(e){}
            loadtimeout = setTimeout(function() {
              try {clearTimeout(overlaytimer);}catch(e){}
              overlayElement.addClass("ready");
              overlayElement.addClass("open");
              cb();
            }, PageSys.ANIMATIONTIME);
            
          }
        ], function(err) {
          overlayElement.removeClass("open");
          overlaytimer = setTimeout(function() {
            overlayElement.removeClass("ready");
          }, 200);
          
          var initial = newDocument.indexOf("<div");
          var start = newDocument.indexOf(">", initial)+1;
          var end = newDocument.lastIndexOf("</div>");
          var html = newDocument.substring(start, end);
          
          history.pushState([html, title, currentPage], title, currentPage);

          updatePageContent(html);
        });

        e.preventDefault();
      });
    });
  }
  
  global.PageSystem = new PageSys();
  global.PageSystem.init();
})(jQuery, this);
