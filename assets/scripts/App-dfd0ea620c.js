!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=function(){function n(){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.bars=Array.from(document.querySelectorAll(".progressBar__fill")),this.totalWidth=0,this.setLoop()}return o(n,[{key:"setLoop",value:function(){var o=this;this.bars.forEach(function(e){var t=e.parentElement.parentElement.querySelector(".skill__counter"),n=t.dataset.value;e.style.width=n+"%",o.animatedCounting(t,n)})}},{key:"animatedCounting",value:function(e,t){var n={number:0};TweenMax.to(n,1,{number:t,roundProps:"number",onUpdate:function(){e.innerHTML=n.number+"%"},ease:Linear.easeNone})}}]),n}();t.default=r},function(e,t,n){"use strict";e.exports=function(){Array.from(document.querySelectorAll(".navigation__list a")).forEach(function(e){e.classList.contains("open-modal")||e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href");TweenMax.to(window,1.5,{scrollTo:{y:t,autokill:!0},ease:Circ.easeInOut})})})}},function(e,t,n){"use strict";e.exports=function(){var e=new ScrollMagic.Controller,t=(new TimelineMax).fromTo(".header__container",.1,{y:"0"},{y:"50%",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:".header",triggerHook:0,duration:"100%"}).setTween(t).addTo(e)}},function(e,t,n){"use strict";e.exports=function(){document.querySelector(".navigation__button").addEventListener("click",function(){this.querySelector(".navigation__icon").classList.toggle("navigation__icon--open"),document.querySelector(".navigation__bg").classList.toggle("navigation__bg--is-visible"),document.querySelector(".navigation__nav").classList.toggle("navigation__nav--is-visible"),Array.from(document.querySelectorAll(".navigation__list li a")).forEach(function(e){e.classList.toggle("is-visible")})})}},function(e,t,n){"use strict";var o,r=(o=n(0))&&o.__esModule?o:{default:o};e.exports=function(){var i=new ScrollMagic.Controller;function e(o,r){return function(){for(var e=o.replace("It",""),t=document.querySelectorAll("."+o),n=0;n<t.length;n++)new ScrollMagic.Scene({triggerElement:t[n],triggerHook:r,reverse:!1}).setClassToggle(t[n],e).addTo(i)}}var t=e("fadeItInBottom",.8),n=e("fadeItInLeft",.7);e("fadeItInRight",.3)(),n(),t(),new ScrollMagic.Scene({triggerElement:".section--expertise",triggerHook:"0.8",duration:"50%"}).setTween(TweenMax.fromTo(".header__intro",1,{opacity:1},{opacity:0,ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".skill-container",triggerHook:"0.6",reverse:!1}).setClassToggle(".zoomItIn","zoomIn").addTo(i),new ScrollMagic.Scene({triggerElement:".skill-container",triggerHook:"0.35",reverse:!1}).on("start",function(){new r.default}).addTo(i)}},function(e,t,n){"use strict";e.exports=function(){var e;!function(){var e=-1<navigator.userAgent.indexOf("Opera Mini"),t=navigator.userAgent.match(/^Mozilla\/5\.0 .+ Gecko\/$/);if(e||t){var n,o,r=document.querySelectorAll('link[rel="stylesheet"]');for(n=0;n<r.length;n++)(o=r[n]).parentNode.removeChild(o)}}(),e=navigator.userAgent.toLowerCase(),/chrome/.test(e)&&/android/.test(e)&&(document.querySelector(".header__intro").style.bottom="15%")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function n(){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),tns({container:".slider",mode:"gallery",nav:!1,lazyload:!0,animateIn:"animateIn",animateOut:"animateOut",animateDelay:700,speed:2e3,prevButton:".controls--prev",nextButton:".controls--next",arrowKeys:!0})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function n(){var t,c,o,u;!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),Array.from||(Array.from=(t=Object.prototype.toString,c=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},o=Math.pow(2,53)-1,u=function(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),o)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,o=1<arguments.length?arguments[1]:void 0;if(void 0!==o){if(!c(o))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(n=arguments[2])}for(var r,i=u(t.length),a=c(this)?Object(new this(i)):new Array(i),l=0;l<i;)r=t[l],a[l]=o?void 0===n?o(r,l):o.call(n,r,l):r,l+=1;return a.length=i,a}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=function(){function n(){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.openModalButtons=Array.from(document.querySelectorAll(".open-modal")),this.modal=document.querySelector(".contact"),this.closeModalButton=document.querySelector(".contact__close"),this.events()}return o(n,[{key:"events",value:function(){var t=this;this.openModalButtons.forEach(function(e){e.addEventListener("click",t.openModal.bind(t))}),this.closeModalButton.addEventListener("click",this.closeModal.bind(this)),document.addEventListener("keyup",this.keyPressHandler.bind(this))}},{key:"openModal",value:function(e){e.preventDefault(),this.modal.classList.add("contact--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("contact--is-visible")}},{key:"keyPressHandler",value:function(e){27===e.keyCode&&this.closeModal()}}]),n}();t.default=r},function(e,t,n){"use strict";var o=a(n(8)),r=(a(n(0)),a(n(7))),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}var l=n(5),c=n(4),u=n(3),s=n(2),f=n(1);new r.default,l(),c(),u(),s(),f(),new o.default,new i.default,Array.from(document.querySelectorAll(".contact-form__input")).forEach(function(e){e.addEventListener("input",function(){""!==e.value?e.previousElementSibling.classList.add("is-visible"):e.previousElementSibling.classList.remove("is-visible")})})}]);