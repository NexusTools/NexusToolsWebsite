/// <reference types="nexusframework/scripts/index" />

(function(nfc) {
    var pageVisible = true;
    var pageFadeCallbacks: Function[];
    const page = document.body.querySelectorAll(".page")[0] as HTMLElement;

    const addAnimationEnd = function(el: Element, handler: Function) {
        el.addEventListener("transitionend", handler as any);
        el.addEventListener("transitionEnd", handler as any);
        el.addEventListener("webkitTransitionEnd", handler as any);
        el.addEventListener("mozTransitionEnd", handler as any);
        el.addEventListener("oTransitionEnd", handler as any);
    }
    const removeAnimationEnd = function(el: Element, handler: Function) {
        el.removeEventListener("transitionend", handler as any);
        el.removeEventListener("transitionEnd", handler as any);
        el.removeEventListener("webkitTransitionEnd", handler as any);
        el.removeEventListener("mozTransitionEnd", handler as any);
        el.removeEventListener("oTransitionEnd", handler as any);
    }
    const fadeInPage = function(cb?: () => void) {
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
        const onAnimationEnd = () => {
            console.log("fadeIn onAnimationEnd");

            pageVisible = true;
            try {clearTimeout(timer);}catch(e) {}
            removeAnimationEnd(page, onAnimationEnd);
            const callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function() {
                callbacks.forEach(function(cb) {
                    cb();
                });
            })

        };
        addAnimationEnd(page, onAnimationEnd);
        timer = setTimeout(onAnimationEnd, 500);
        page.className = page.className.replace(/(^|\s)loading(\s|$)/g, function(match) {
            return /^\s.+\s$/.test(match) ? " " : "";
        });
    }

    const fadeOutPage = function(cb?: () => void) {
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
        const onAnimationEnd = () => {
            console.log("fadeOut onAnimationEnd");

            pageVisible = false;
            try {clearTimeout(timer);}catch(e) {}
            removeAnimationEnd(page, onAnimationEnd);
            const callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function() {
                callbacks.forEach(function(cb) {
                    cb();
                });
            })
        };
        addAnimationEnd(page, onAnimationEnd);
        timer = setTimeout(onAnimationEnd, 500);
        if (!/(^|\s)loading(\s|$)/.test(page.className))
            page.className = (page.className + " loading").trim();
    }

    const hideMenu = function() {
        $(".dropdown-menu.show, .dropdown.show, .collapse.show").removeClass("show");
    };

    var skip: boolean;
    nfc.initPageSystem({
        noprogress: true,
        prerequest(path: string) {
            document.title = "Loading - NexusTools";
            fadeOutPage();
            hideMenu();
            skip = true;
            return true;
        },
        handler(res: NexusFrameworkTransportResponse) {
            const data = res.contentFromJSON;
            if (skip)
                skip = false;
            else
                hideMenu();
            fadeOutPage(function() {
                page.innerHTML = data.page;
                nfc.createComponents(page);
                window.NexusFrameworkLoader.load(data.loader, function(err?) {
                    if (err) {
                        console.warn(err);
                        location.reload(true);
                    } else
                        fadeInPage();
                });
                document.title = data.title ? (data.title + " - NexusTools") : "NexusTools";
            })
            return true;
        }
    });
})(window.NexusFrameworkClient);
