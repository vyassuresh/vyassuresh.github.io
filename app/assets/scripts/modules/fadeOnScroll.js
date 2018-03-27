var fadeOnScroll = function() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: ".header__intro",
            triggerHook: "0.3",
            duration: "200px"
        })
        .setTween(TweenMax.fromTo(".header__intro", 15, {
            opacity: 1
        }, {
                opacity: 0,
                ease: Linear.easeNone
            }))
        .addTo(controller)
        .addIndicators({
            zindex: 999,
            suffix: "3"
        });
}

module.exports = fadeOnScroll;