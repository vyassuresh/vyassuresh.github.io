var Rellax = require('rellax');
var rellax = new Rellax('.header');
var fixChromeAndroid = require('./modules/fixChromeAndroid.js');
var fadeOnScroll = require('./modules/fadeOnScroll.js');
var mobileMenu = require('./modules/mobileMenu.js');

fixChromeAndroid();
fadeOnScroll();
mobileMenu();

