(function($, global) {
  function PageSys() {
    this.registeredElements = [];
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
  var host = (""+location.href).match(fullUrl);
  
  var currentPage = host[3];
  host = host[2];
  console.log(host, currentPage);
  
  PageSys.prototype.init = function() {
    if(!("pushState" in history))
      return;
    
    if(history.state == null) {
      console.log("Initializing state");
      history.replaceState([pageElement.html(), document.title], document.title);
    }
    
    var loadtimeout;
    window.onpopstate = function(e) {
      try{clearTimeout(loadtimeout)}catch(e){}
      $("html, body").animate({ scrollTop: "0px" });
      pageElement.addClass("loading");
      document.title = e.state[1];
      
      loadtimeout = setTimeout(function() {
        var oldHeight = pageElement.height();
        pageElement.css({
          "height": false
        });
        pageElement.empty();
        
        pageElement.html(e.state[0]);
        self.handleElements(pageElement);
        pageElement.removeClass("loading");
        
        if(false)
          setTimeout(function() {
            var newHeight = pageElement.height();
            pageElement.css({
              "height": oldHeight + "px"
            });
            pageElement.animate("height", newHeight + "px");
          });
      }, 500);
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
          href = "//nexustools.com" + href;
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

        var newDocument;
        async.parallel([
          function(cb) {
            $.get(href).done(function(data) {
              newDocument = $(data);
              cb();
            }).fail(function(err) {
              cb(err);
            });
          },
          function(cb) {
            try{clearTimeout(loadtimeout)}catch(e){}
            loadtimeout = setTimeout(cb, 500);
          }
        ], function(err) {
          console.log(newDocument);
          var oldHeight = pageElement.height();
          pageElement.css({
            "height": false
          });
          pageElement.empty();

          var newPageElement, title;
          newDocument.each(function(i, el) {
            var tagName = el.tagName;
            el = $(el);
            if(el.hasClass("page") && tagName == "DIV")
              newPageElement = el;
            else if(tagName == "TITLE")
              title = el.html();
          });
          var html = newPageElement.html();
          history.pushState([html, title], title, currentPage);
          document.title = title;

          pageElement.html(html);
          self.handleElements(pageElement);
          pageElement.removeClass("loading");
          
          if(false)
            setTimeout(function() {
              var newHeight = pageElement.height();
              pageElement.css({
                "height": oldHeight + "px"
              });
              pageElement.animate("height", newHeight + "px");
            });
        });

        e.preventDefault();
      });
    });
  }
  
  global.PageSystem = new PageSys();
  global.PageSystem.init();
})(jQuery, this);
