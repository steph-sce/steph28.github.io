// Debut texte aleatoire page accueil
var quotes = ["JavaScript", "Angular","Vue.js", "Node.js", "HTML5/CSS3", "WEB & MOBILE"];

window.onload = function () {
    window.setInterval(function () {
        var text = document.getElementById("ShowText");
        text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }, 3000);
};
// Fin de changement de texte
