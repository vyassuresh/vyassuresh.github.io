var Rellax = require('rellax');
var fixChromeAndroid = require('./modules/fixChromeAndroid.js');
var fadeOnScroll = require('./modules/fadeOnScroll.js');
var mobileMenu = require('./modules/mobileMenu.js');
var projectSlider = require('./modules/projectSlider.js');
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
projectSlider();