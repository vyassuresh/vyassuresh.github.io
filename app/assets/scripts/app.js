var Rellax = require('rellax');
var fixChromeAndroid = require('./modules/fixChromeAndroid.js');
var fadeOnScroll = require('./modules/fadeOnScroll.js');
var mobileMenu = require('./modules/mobileMenu.js');
// import {
//     TweenMax,
//     Power2,
//     TimelineLite
// } from "gsap";
// import ScrollMagic from "scrollmagic";

var rellax = new Rellax('.header');

fixChromeAndroid();
fadeOnScroll();
mobileMenu();


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
        triggerElement: ".divForScrollmagic",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin(".divForScrollmagic", {pushFollowers: false})
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);