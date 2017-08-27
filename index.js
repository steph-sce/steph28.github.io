var quotes = ["JavaScript", "Angular", "ReactNative","Vue.js", "Node.js"];

window.onload = function () {
    window.setInterval(function () {
        var text = document.getElementById("ShowText");
        text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }, 3000);
};

