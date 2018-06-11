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
eval("\n\nvar _modal = __webpack_require__(/*! ./modules/modal */ \"./app/assets/scripts/modules/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar browserHacks = __webpack_require__(/*! ./modules/browserHacks.js */ \"./app/assets/scripts/modules/browserHacks.js\");\nvar fadeOnScroll = __webpack_require__(/*! ./modules/fadeOnScroll.js */ \"./app/assets/scripts/modules/fadeOnScroll.js\");\nvar mobileMenu = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./app/assets/scripts/modules/mobileMenu.js\");\nvar projectSlider = __webpack_require__(/*! ./modules/projectSlider.js */ \"./app/assets/scripts/modules/projectSlider.js\");\nvar parallax = __webpack_require__(/*! ./modules/parallax.js */ \"./app/assets/scripts/modules/parallax.js\");\nvar smoothScrolling = __webpack_require__(/*! ./modules/smoothScrolling.js */ \"./app/assets/scripts/modules/smoothScrolling.js\");\n\n\nbrowserHacks();\nfadeOnScroll();\nmobileMenu();\nprojectSlider();\nparallax();\nsmoothScrolling();\nvar modal = new _modal2.default();\n\nvar inputs = Array.from(document.querySelectorAll('.contact-form__input'));\ninputs.forEach(function (el) {\n    el.addEventListener('input', function () {\n        if (!(el.value === '')) {\n            el.previousElementSibling.classList.add('is-visible');\n        } else {\n            el.previousElementSibling.classList.remove('is-visible');\n        }\n    });\n});\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/browserHacks.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/browserHacks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar browserHacks = function browserHacks() {\n\n    function chromeOnAndroid() {\n        var userAgent = navigator.userAgent.toLowerCase();\n        var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);\n        if (isAndroidChrome) {\n            document.querySelector('.header__intro').style.bottom = '15%';\n        }\n    }\n\n    function operaAndUC() {\n        var isOperaMini = navigator.userAgent.indexOf(\"Opera Mini\") > -1,\n            isUCMini = navigator.userAgent.match(/^Mozilla\\/5\\.0 .+ Gecko\\/$/);\n\n        if (isOperaMini || isUCMini) {\n\n            var stylesheets = document.querySelectorAll('link[rel=\"stylesheet\"]'),\n                i,\n                sheet;\n\n            for (i = 0; i < stylesheets.length; i++) {\n                sheet = stylesheets[i];\n\n                sheet.parentNode.removeChild(sheet);\n            }\n        }\n    }\n\n    operaAndUC();\n    chromeOnAndroid();\n};\n\nmodule.exports = browserHacks;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/browserHacks.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/fadeOnScroll.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/fadeOnScroll.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*global ScrollMagic, TweenMax, Power0, document, module */\n\nvar fadeOnScroll = function fadeOnScroll() {\n\n    var controller = new ScrollMagic.Controller();\n\n    function fadeOutIntro() {\n\n        new ScrollMagic.Scene({\n            triggerElement: \".section--expertise\",\n            triggerHook: \"0.8\",\n            duration: \"50%\"\n        }).setTween(TweenMax.fromTo(\".header__intro\", 1, {\n            opacity: 1\n        }, {\n            opacity: 0,\n            ease: Power0.easeNone\n        })).addTo(controller);\n    }\n\n    function zoomIn() {\n\n        new ScrollMagic.Scene({\n            triggerElement: '.skill-container',\n            triggerHook: \"0.6\",\n            reverse: false\n        }).setClassToggle(\".zoomItIn\", \"zoomIn\").addTo(controller);\n    }\n\n    // Function to make scenes for similar elements\n    function makeScene(selectorClass, hook) {\n\n        return function () {\n            var animationClass = selectorClass.replace('It', '');\n\n            var selectorArr = document.querySelectorAll('.' + selectorClass);\n\n            for (var i = 0; i < selectorArr.length; i++) {\n                new ScrollMagic.Scene({\n                    triggerElement: selectorArr[i],\n                    triggerHook: hook,\n                    reverse: false\n                }).setClassToggle(selectorArr[i], animationClass).addTo(controller);\n            }\n        };\n    }\n\n    var fadeInHeading = makeScene('fadeItInBottom', 0.8);\n    var fadeInLeft = makeScene('fadeItInLeft', 0.7);\n    var fadeInRight = makeScene('fadeItInRight', 0.7);\n\n    fadeInRight();\n    fadeInLeft();\n    fadeInHeading();\n    fadeOutIntro();\n    zoomIn();\n};\n\nmodule.exports = fadeOnScroll;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/fadeOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/mobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/mobileMenu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mobileMenu = function mobileMenu() {\n    document.querySelector('.navigation__button').addEventListener('click', function () {\n        this.querySelector('.navigation__icon').classList.toggle('navigation__icon--open');\n        document.querySelector('.navigation__bg').classList.toggle('navigation__bg--is-visible');\n        document.querySelector('.navigation__nav').classList.toggle('navigation__nav--is-visible');\n\n        Array.from(document.querySelectorAll('.navigation__list li a')).forEach(function (current) {\n            current.classList.toggle('is-visible');\n        });\n    });\n};\n\nmodule.exports = mobileMenu;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/mobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/modal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Modal = function () {\n    function Modal() {\n        _classCallCheck(this, Modal);\n\n        this.openModalButtons = Array.from(document.querySelectorAll('.open-modal'));\n        this.modal = document.querySelector('.contact');\n        this.closeModalButton = document.querySelector('.contact__close');\n        this.events();\n    }\n\n    _createClass(Modal, [{\n        key: 'events',\n        value: function events() {\n            var _this = this;\n\n            this.openModalButtons.forEach(function (elm) {\n                elm.addEventListener('click', _this.openModal.bind(_this));\n            });\n            this.closeModalButton.addEventListener('click', this.closeModal.bind(this));\n            document.addEventListener('keyup', this.keyPressHandler.bind(this));\n        }\n    }, {\n        key: 'openModal',\n        value: function openModal(e) {\n            e.preventDefault();\n            this.modal.classList.add('contact--is-visible');\n            return false;\n            console.log('dsg');\n        }\n    }, {\n        key: 'closeModal',\n        value: function closeModal() {\n            this.modal.classList.remove('contact--is-visible');\n        }\n    }, {\n        key: 'keyPressHandler',\n        value: function keyPressHandler(e) {\n            if (e.keyCode === 27) {\n                this.closeModal();\n            }\n        }\n    }]);\n\n    return Modal;\n}();\n\nexports.default = Modal;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/modal.js?");

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

/***/ }),

/***/ "./app/assets/scripts/modules/smoothScrolling.js":
/*!*******************************************************!*\
  !*** ./app/assets/scripts/modules/smoothScrolling.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar smoothScrolling = function smoothScrolling() {\n\n    Array.from(document.querySelectorAll('.navigation__list a')).forEach(function (current) {\n        current.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            var target = this.getAttribute('href');\n\n            TweenMax.to(window, 1.5, { scrollTo: {\n                    y: target,\n                    autokill: true,\n                    ease: Circ.easeInOut\n                } });\n        });\n    });\n};\n\nmodule.exports = smoothScrolling;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/smoothScrolling.js?");

/***/ })

/******/ });