(function Mastodon() {
    let index = 0;
    let enabled = false;

    function focus() {
        $('article').css({
            visibility: "hidden",
            position: "absolute",
        });
        $('article').eq(index).css({
            visibility: "visible",
            position: "static",
        });
        if (index > $('article').length - 5) {
            $("button.load-more").click();
            console.log("load more", index, $('article').length)
        }
        $(".tabs-bar__wrapper,button.load-more,.columns-area__panels__pane__inner").css({
            visibility: enabled ? "hidden" : "visible",
        })
        if (!enabled) {
            $('article').eq(index).css({
                visibility: "visible",
                position: "static",
            });
        } else {
            $('.scrollable').css({
                backgroundColor: "transparent",
            });
        }
    }

    $(document.body).on("keydown", (event) => {
        switch (event.key) {
        case 'ArrowDown':
        case 'j':
            index = Math.min(index + 1, $('article').length - 1);
            break;
        case 'ArrowUp':
        case 'k':
            index = Math.max(index - 1, 0);
            break;
        case 'Home':
            index = 0;
            break;
        case 'End':
            index = $('article').length - 1;
            break;
        case 'z':
            enabled = !enabled;
            break;
        case '?':
            setTimeout(() => {
                $(".keyboard-shortcuts").find("tbody").prepend(
                    $("<tr><td><kbd>z</kbd></td><td><span>Toggle zoom mode (Mastodon Zoom extension)</span></td></tr>")
                );
            }, 1);
            break;
        default:
            console.log("Mastodon-zoom:", event.key);
        }
        focus();
    });
            
    setInterval(() => {
        if (enabled) {
            focus();
        }
    }, 500)
    console.log("Mastodon Zoom extension was loaded. Type 'Z' to toggle.")
})();
