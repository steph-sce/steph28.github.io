function CalledOnLoad() {
    function RandomQuote() {
        var quotes = new Array();
        quotes[0] = "JavaScript"
        quotes[1] = "Angular"
        quotes[2] = "ReactNative"
        quotes[3] = "Vue.js"
        quotes[4] = "Node.js"
        return quotes[Math.floor(Math.random() * 4.99)];
    }
    function UpdateText() {
        var text = document.getElementById("ShowText");
        text.innerHTML = RandomQuote();
    }

    window.setInterval(UpdateText, 3000);
}

window.onload = CalledOnLoad;


//scroll
function Scroll() {
    (function ($) {
        var elem = $.jInvertScroll(['.scroll'],
            {
                height: 6000,
                onScroll: function (percent) {
                    console.log(percent);
                }
            });

        $(window).resize(function () {
            if ($(window).width() <= 768) {
                elem.destroy();
            }
            else {
                elem.reinitialize();
            }
        });
    }(jQuery));
}
