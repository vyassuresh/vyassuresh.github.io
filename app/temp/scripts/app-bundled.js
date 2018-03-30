/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fixChromeAndroid = __webpack_require__(/*! ./modules/fixChromeAndroid.js */ \"./app/assets/scripts/modules/fixChromeAndroid.js\");\nvar fadeOnScroll = __webpack_require__(/*! ./modules/fadeOnScroll.js */ \"./app/assets/scripts/modules/fadeOnScroll.js\");\nvar mobileMenu = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./app/assets/scripts/modules/mobileMenu.js\");\nvar projectSlider = __webpack_require__(/*! ./modules/projectSlider.js */ \"./app/assets/scripts/modules/projectSlider.js\");\nvar parallax = __webpack_require__(/*! ./modules/parallax.js */ \"./app/assets/scripts/modules/parallax.js\");\n\nfixChromeAndroid();\nfadeOnScroll();\nmobileMenu();\nprojectSlider();\nparallax();\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/fadeOnScroll.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/fadeOnScroll.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fadeOnScroll = function fadeOnScroll() {\n\n    var controller = new ScrollMagic.Controller();\n\n    function fadeOutIntro() {\n\n        new ScrollMagic.Scene({\n            triggerElement: \".section--expertise\",\n            triggerHook: \"0.8\",\n            duration: \"50%\"\n        }).setTween(TweenMax.fromTo(\".header__intro\", 1, {\n            opacity: 1\n        }, {\n            opacity: 0,\n            ease: Power0.easeNone\n        })).addTo(controller);\n    }\n\n    function fadeInHeading() {\n\n        var fadeItInBottom = document.querySelectorAll('.fadeItInBottom');\n\n        for (var i = 0; i < fadeItInBottom.length; i++) {\n\n            new ScrollMagic.Scene({\n                triggerElement: fadeItInBottom[i],\n                triggerHook: \"0.8\",\n                reverse: false\n            }).setClassToggle(fadeItInBottom[i], \"fadeInDown\").addTo(controller);\n        }\n    }\n\n    function fadeInLeft() {\n\n        var fadeItInLeft = document.querySelectorAll('.fadeItInLeft');\n\n        for (var i = 0; i < fadeItInLeft.length; i++) {\n            new ScrollMagic.Scene({\n                triggerElement: fadeItInLeft[i],\n                triggerHook: \"0.7\",\n                reverse: false\n            }).setClassToggle(fadeItInLeft[i], \"fadeInLeft\").addTo(controller);\n        }\n    }\n\n    function zoomIn() {\n\n        new ScrollMagic.Scene({\n            triggerElement: '.skill-container',\n            triggerHook: \"0.6\",\n            reverse: false\n        }).setClassToggle(\".zoomItIn\", \"zoomIn\").addIndicators().addTo(controller);\n    }\n\n    function fadeInRight() {\n        var fadeItInRight = document.querySelectorAll('.fadeItInRight');\n\n        for (var i = 0; i < fadeItInRight.length; i++) {\n            new ScrollMagic.Scene({\n                triggerElement: fadeItInRight[i],\n                triggerHook: \"0.7\",\n                reverse: false\n            }).setClassToggle(fadeItInRight[i], \"fadeInRight\").addTo(controller);\n        }\n    }\n\n    fadeOutIntro();\n    fadeInHeading();\n    fadeInLeft();\n    fadeInRight();\n    zoomIn();\n};\n\nmodule.exports = fadeOnScroll;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/fadeOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/fixChromeAndroid.js":
/*!********************************************************!*\
  !*** ./app/assets/scripts/modules/fixChromeAndroid.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fixChromeAndroid = function fixChromeAndroid() {\n    var userAgent = navigator.userAgent.toLowerCase();\n    var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);\n    if (isAndroidChrome) {\n        document.querySelector('.header__intro').style.bottom = '15%';\n    }\n};\n\nmodule.exports = fixChromeAndroid;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/fixChromeAndroid.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/mobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/mobileMenu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mobileMenu = function mobileMenu() {\n    document.querySelector('.navigation__button').addEventListener('click', function () {\n        this.querySelector('.navigation__icon').classList.toggle('navigation__icon--open');\n    });\n};\n\nmodule.exports = mobileMenu;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/mobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./app/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallax = function parallax() {\n    var controller = new ScrollMagic.Controller();\n\n    var myTimeline = new TimelineMax().fromTo(\".header__container\", 0.1, {\n        y: \"0\"\n    }, {\n        y: \"50%\",\n        ease: Linear.easeNone\n    });\n\n    new ScrollMagic.Scene({\n        triggerElement: \".header\",\n        triggerHook: 0,\n        duration: \"100%\"\n    }).setTween(myTimeline).addTo(controller);\n};\n\nmodule.exports = parallax;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/parallax.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/projectSlider.js":
/*!*****************************************************!*\
  !*** ./app/assets/scripts/modules/projectSlider.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar projectSlider = function projectSlider() {\n    var controller = new ScrollMagic.Controller();\n\n    // define movement of panels\n    var wipeAnimation = new TimelineMax().fromTo(\".project.project1\", 1, {\n        x: \"-130%\"\n    }, {\n        x: \"0%\",\n        ease: Linear.easeNone\n    }) // in from left\n    .fromTo(\".project.project2\", 1, {\n        x: \"130%\"\n    }, {\n        x: \"0%\",\n        ease: Linear.easeNone\n    }) // in from right\n    .fromTo(\".project.project3\", 1, {\n        y: \"-130%\"\n    }, {\n        y: \"0%\",\n        ease: Linear.easeNone\n    }) // in from top\n    .fromTo(\".project.project4\", 1, {\n        y: \"130%\"\n    }, {\n        y: \"0%\",\n        ease: Linear.easeNone\n    }); // in from top\n\n    // create scene to pin and link animation\n    new ScrollMagic.Scene({\n        triggerElement: \".section--projects\",\n        triggerHook: \"onLeave\",\n        duration: \"250%\"\n    }).setPin(\".section--projects\", { pushFollowers: true }).setTween(wipeAnimation).addTo(controller);\n};\n\nmodule.exports = projectSlider;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/projectSlider.js?");

/***/ })

/******/ });