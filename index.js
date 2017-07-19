function CalledOnLoad() {
    function RandomQuote() {
        var quotes = new Array();
        quotes[0] = "JAVASCRIPT"
        quotes[1] = "ANGULAR"
        quotes[2] = "REACT-NATIVE"
        quotes[3] = "VUE.JS"
        quotes[4] = "NODE.JS"
        return quotes[Math.floor(Math.random() * 4.99)];
    }
    function UpdateText() {
        var text = document.getElementById("ShowText");
        text.innerHTML = RandomQuote();
    }

    window.setInterval(UpdateText, 3000);
}

window.onload = CalledOnLoad;
