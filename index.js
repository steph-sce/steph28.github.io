// Debut texte aleatoire page accueil
var quotes = ["JavaScript", "Angular", "Vue.js", "Node.js", "HTML", "Mobile", "CSS"];

window.onload = function () {
    window.setInterval(function () {
        var text = document.getElementById("ShowText");
        text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }, 3000);
};
// Fin texte aleatoire

// Animation Scroll
/*$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
        .to("#slideContainer", 1, { x: "-25%" })	// move in to first panel
        .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        .to("#slideContainer", 1, { x: "-50%" })
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to forth panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        .to("#slideContainer", 1, { x: "-75%" })
        .to("#slideContainer", 0.5, { z: 0 });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});*/
// Fin Animation Scroll
var controller = new ScrollMagic.Controller({ vertical: false });

// build tween
var tween = TweenMax.to("#target", 0.5, { backgroundColor: "green", width: "+=400" });

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 500 })
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);