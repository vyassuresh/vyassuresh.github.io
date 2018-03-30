var projectSlider = (function() {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo(".project.project1", 1, {
            x: "-130%"
        }, {
                x: "0%",
                ease: Linear.easeNone
            }) // in from left
        .fromTo(".project.project2", 1, {
            x: "130%"
        }, {
                x: "0%",
                ease: Linear.easeNone
            }) // in from right
        .fromTo(".project.project3", 1, {
            y: "-130%"
        }, {
                y: "0%",
                ease: Linear.easeNone
            }) // in from top
        .fromTo(".project.project4", 1, {
            y: "130%"
        }, {
                y: "0%",
                ease: Linear.easeNone
            }); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: ".section--projects",
        triggerHook: "onLeave",
        duration: "250%"
    })
        .setPin(".section--projects", { pushFollowers: true })
        .setTween(wipeAnimation)
        .addTo(controller);
})

module.exports = projectSlider;