(function Mastodon() {
    let index = 0;
    let enabled = false;

    function zoom() {
        $('article').css({
            visibility: enabled ? "hidden" : "visible",
            position: enabled ? "absolute" : "static",
        });
        $('article').eq(index).css({
            visibility: "visible",
            position: "static",
        });
        $(".tabs-bar__wrapper,button.load-more,.columns-area__panels__pane__inner").css({
            visibility: enabled ? "hidden" : "visible",
        })
        $('.scrollable').css({
            backgroundColor: "transparent",
        });
        if (index > $('article').length - 5) {
            $("button.load-more").click();
            console.log("load more", index, $('article').length)
        }
    }

    $(document.body).on("keydown", (event) => {
        console.log("Mastodon-zoom:", event.key, event.target.tagName);
        if (event.target.tagName != "DIV") return;
        switch (event.key) {
        case 'j':
        case 'ArrowDown':
            index = Math.min(index + 1, $('article').length - 1);
            break;
        case 'k':
        case 'ArrowUp':
            index = Math.max(index - 1, 0);
            break;
        case 'z':
            enabled = !enabled;
            if (enabled) event.target.requestFullscreen();
            break;
        case '?':
            setTimeout(() => {
                console.log("Mastodon Zoom: Add shortcuts")
                $(".keyboard-shortcuts").find("tbody").prepend(
                    $("<tr><td><kbd>z</kbd></td><td><span>Toggle zoom mode (Mastodon Zoom extension)</span></td></tr>"),
                    $("<tr><td><kbd>f</kbd></td><td><span>Enter full-screen mode (Mastodon Zoom extension)</span></td></tr>"),
                );
            }, 1);
            break;
        default:
            console.log("Mastodon-zoom:", event.key);
        }
        zoom();
    });
            
    setInterval(() => {
        if (enabled) {
            zoom();
        }
    }, 500)

    console.log('Mastodon Zoom: Extension was loaded. Usage:');
    console.log(' - Press "Esc" to unfocus textarea/search.');
    console.log(' - Press "z" to toggle the zoom.');
    console.log(' - Press "j" or "down" to go to the next article.');
    console.log(' - Press "k" or "up" to go to the previous article.');
    console.log('See https://github.com/laffra/mastodon-zoom.');
})();
