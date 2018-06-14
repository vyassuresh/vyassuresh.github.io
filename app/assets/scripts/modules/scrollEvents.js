/*global ScrollMagic, TweenMax, Power0, document, module */
import ProgressBar from "./progressBar";

var scrollEvents = (function() {

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

    function zoomIn() {
        new ScrollMagic.Scene({
            triggerElement: '.skill-container',
            triggerHook: "0.6",
            reverse: false
        })
        .setClassToggle(".zoomItIn", "zoomIn")
        .addTo(controller);
    }

    function startProgressBar() {
        new ScrollMagic.Scene({
            triggerElement: '.skill-container',
            triggerHook: "0.35",
            reverse: false
        })
        .on('start', () => {
            var progressBar = new ProgressBar();
        })
        .addTo(controller);
    }

    // Function to make scenes for similar elements
    function makeScene(selectorClass, hook) {
        return function() {
            var animationClass = selectorClass.replace('It', '');
            var selectorArr = document.querySelectorAll('.' + selectorClass);

            for (var i = 0; i < selectorArr.length; i++) {
                new ScrollMagic.Scene({
                    triggerElement: selectorArr[i],
                    triggerHook: hook,
                    reverse: false
                })
                .setClassToggle(selectorArr[i], animationClass)
                .addTo(controller);
            }
        }
    } 

    var fadeInHeading = makeScene('fadeItInBottom', 0.8);
    var fadeInLeft = makeScene('fadeItInLeft', 0.7);
    var fadeInRight = makeScene('fadeItInRight', 0.7);

    fadeInRight();
    fadeInLeft();
    fadeInHeading();
    fadeOutIntro();
    zoomIn();
    startProgressBar();
});

module.exports = scrollEvents;