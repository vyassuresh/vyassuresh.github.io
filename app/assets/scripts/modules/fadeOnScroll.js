var fadeOnScroll = (function() {

    var controller = new ScrollMagic.Controller();

    function fadeOutIntro() {

        new ScrollMagic.Scene({
                triggerElement: ".section--expertise",
                triggerHook: "0.8",
                duration: "50%"
            })
            .setTween(TweenMax.fromTo(".header__intro", 1, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Power0.easeNone
            }))
            .addTo(controller)
    }

    function fadeInHeading() {

        var fadeItInBottom = document.querySelectorAll('.fadeItInBottom');

        for (var i = 0; i < fadeItInBottom.length; i++) {

            new ScrollMagic.Scene({
                    triggerElement: fadeItInBottom[i],
                    triggerHook: "0.8",
                    reverse: false
                })
                .setClassToggle(fadeItInBottom[i], "fadeInDown")
                .addTo(controller);

        }
    }

    function fadeInLeft() {

        var fadeItInLeft = document.querySelectorAll('.fadeItInLeft');

        for (var i = 0; i < fadeItInLeft.length; i++) {
            new ScrollMagic.Scene({
                    triggerElement: fadeItInLeft[i],
                    triggerHook: "0.7",
                    reverse: false
                })
                .setClassToggle(fadeItInLeft[i], "fadeInLeft")
                .addTo(controller);
        }
    }

    function zoomIn() {

        new ScrollMagic.Scene({
                triggerElement: '.skill-container',
                triggerHook: "0.6",
                reverse: false
            })
            .setClassToggle(".zoomItIn", "zoomIn")
            .addTo(controller);
    }

    function fadeInRight() {
        var fadeItInRight = document.querySelectorAll('.fadeItInRight');

        for (var i = 0; i < fadeItInRight.length; i++) {
            new ScrollMagic.Scene({
                    triggerElement: fadeItInRight[i],
                    triggerHook: "0.7",
                    reverse: false
                })
                .setClassToggle(fadeItInRight[i], "fadeInRight")
                .addTo(controller);
        }
    }

    fadeOutIntro();
    fadeInHeading();
    fadeInLeft();
    fadeInRight();
    zoomIn();
});

module.exports = fadeOnScroll;