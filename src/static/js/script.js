/// <reference types="nexusframework/scripts/index" />
(function () {
    var pageVisible = true;
    var pageFadeCallbacks;
    var page = document.body.querySelectorAll(".page")[0];
    var addAnimationEnd = function (el, handler) {
        el.addEventListener("transitionend", handler);
        el.addEventListener("transitionEnd", handler);
        el.addEventListener("webkitTransitionEnd", handler);
        el.addEventListener("mozTransitionEnd", handler);
        el.addEventListener("oTransitionEnd", handler);
    };
    var removeAnimationEnd = function (el, handler) {
        el.removeEventListener("transitionend", handler);
        el.removeEventListener("transitionEnd", handler);
        el.removeEventListener("webkitTransitionEnd", handler);
        el.removeEventListener("mozTransitionEnd", handler);
        el.removeEventListener("oTransitionEnd", handler);
    };
    var fadeInPage = function (cb) {
        if (pageVisible) {
            if (cb)
                cb();
            return;
        }
        if (pageFadeCallbacks) {
            if (cb)
                pageFadeCallbacks.push(cb);
            return;
        }
        var timer;
        pageFadeCallbacks = [];
        if (cb)
            pageFadeCallbacks.push(cb);
        var onAnimationEnd = function () {
            console.log("fadeIn onAnimationEnd");
            pageVisible = true;
            try {
                clearTimeout(timer);
            }
            catch (e) { }
            removeAnimationEnd(page, onAnimationEnd);
            var callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function () {
                callbacks.forEach(function (cb) {
                    cb();
                });
            });
        };
        addAnimationEnd(page, onAnimationEnd);
        timer = setTimeout(onAnimationEnd, 500);
        page.className = page.className.replace(/(^|\s)loading(\s|$)/g, function (match) {
            return /^\s.+\s$/.test(match) ? " " : "";
        });
    };
    var fadeOutPage = function (cb) {
        if (!pageVisible) {
            if (cb)
                cb();
            return;
        }
        if (pageFadeCallbacks) {
            if (cb)
                pageFadeCallbacks.push(cb);
            return;
        }
        var timer;
        pageFadeCallbacks = [];
        if (cb)
            pageFadeCallbacks.push(cb);
        var onAnimationEnd = function () {
            console.log("fadeOut onAnimationEnd");
            pageVisible = false;
            try {
                clearTimeout(timer);
            }
            catch (e) { }
            removeAnimationEnd(page, onAnimationEnd);
            var callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function () {
                callbacks.forEach(function (cb) {
                    cb();
                });
            });
        };
        addAnimationEnd(page, onAnimationEnd);
        timer = setTimeout(onAnimationEnd, 500);
        if (!/(^|\s)loading(\s|$)/.test(page.className))
            page.className = (page.className + " loading").trim();
    };
    var hideMenu = function () {
        $(".dropdown-menu.show, .dropdown.show, .collapse.show").removeClass("show");
    };
    var skip;
    window.NexusFramework.initPageSystem({
        noprogress: true,
        prerequest: function (path) {
            document.title = "Loading - NexusTools";
            fadeOutPage();
            hideMenu();
            skip = true;
            return true;
        },
        handler: function (res) {
            var data = res.contentFromJSON;
            if (skip)
                skip = false;
            else
                hideMenu();
            fadeOutPage(function () {
                page.innerHTML = data.page;
                window.NexusFramework.createComponents(page);
                window.NexusFrameworkLoader.load(data.loader, function (err) {
                    if (err) {
                        console.warn(err);
                        location.reload(true);
                    }
                    else
                        fadeInPage();
                });
                document.title = data.title ? (data.title + " - NexusTools") : "";
            });
            return true;
        }
    });
})();
//# sourceMappingURL=script.js.map