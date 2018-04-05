/// <reference types="nexusframework/scripts/index" />

(function(nfc) {
    var pageVisible = true;
    var pageFadeCallbacks: Function[];
    const page = document.body.querySelectorAll(".page")[0] as HTMLElement;

    var timer;
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
        pageFadeCallbacks = [];
        if (cb)
            pageFadeCallbacks.push(cb);
        try {clearTimeout(timer);}catch(e) {}
        timer = setTimeout(() => {
            console.trace("fadeIn onAnimationEnd");

            pageVisible = true;
            try {clearTimeout(timer);}catch(e) {}
            const callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function() {
                callbacks.forEach(function(cb) {
                    cb();
                });
            });
        }, 350);
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
        pageFadeCallbacks = [];
        if (cb)
            pageFadeCallbacks.push(cb);
        try {clearTimeout(timer);}catch(e) {}
        timer = setTimeout(() => {
            console.trace("fadeOut onAnimationEnd");

            pageVisible = false;
            try {clearTimeout(timer);}catch(e) {}
            const callbacks = pageFadeCallbacks;
            pageFadeCallbacks = undefined;
            setTimeout(function() {
                callbacks.forEach(function(cb) {
                    cb();
                });
            })
        }, 350);
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
            document.title = data.title ? (data.title + " - NexusTools") : "NexusTools";
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
            })
            return true;
        }
    });
})(window.NexusFrameworkClient);
