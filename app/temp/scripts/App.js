!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bars=Array.from(document.querySelectorAll(".progressBar__fill")),this.totalWidth=0,this.setLoop()}return o(e,[{key:"setLoop",value:function(){var e=this;this.bars.forEach(function(t){var n=t.parentElement.parentElement.querySelector(".skill__counter"),o=n.dataset.value;t.style.width=o+"%",e.animatedCounting(n,o)})}},{key:"animatedCounting",value:function(e,t){var n={number:0};TweenMax.to(n,1,{number:t,roundProps:"number",onUpdate:function(){e.innerHTML=n.number+"%"},ease:Linear.easeNone})}}]),e}();t.default=r},function(e,t,n){"use strict";e.exports=function(){Array.from(document.querySelectorAll(".navigation__list a")).forEach(function(e){e.classList.contains("open-modal")||e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href");TweenMax.to(window,1.5,{scrollTo:{y:t,autokill:!0},ease:Circ.easeInOut})})})}},function(e,t,n){"use strict";e.exports=function(){var e=new ScrollMagic.Controller,t=(new TimelineMax).fromTo(".header__container",.1,{y:"0"},{y:"50%",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:".header",triggerHook:0,duration:"100%"}).setTween(t).addTo(e)}},function(e,t,n){"use strict";e.exports=function(){document.querySelector(".navigation__button").addEventListener("click",function(){this.querySelector(".navigation__icon").classList.toggle("navigation__icon--open"),document.querySelector(".navigation__bg").classList.toggle("navigation__bg--is-visible"),document.querySelector(".navigation__nav").classList.toggle("navigation__nav--is-visible"),Array.from(document.querySelectorAll(".navigation__list li a")).forEach(function(e){e.classList.toggle("is-visible")})})}},function(e,t,n){"use strict";var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};e.exports=function(){var e=new ScrollMagic.Controller;function t(t,n){return function(){for(var o=t.replace("It",""),r=document.querySelectorAll("."+t),i=0;i<r.length;i++)new ScrollMagic.Scene({triggerElement:r[i],triggerHook:n,reverse:!1}).setClassToggle(r[i],o).addTo(e)}}var n=t("fadeItInBottom",.8),o=t("fadeItInLeft",.7);t("fadeItInRight",.3)(),o(),n(),new ScrollMagic.Scene({triggerElement:".section--expertise",triggerHook:"0.8",duration:"50%"}).setTween(TweenMax.fromTo(".header__intro",1,{opacity:1},{opacity:0,ease:Power0.easeNone})).addTo(e),new ScrollMagic.Scene({triggerElement:".skill-container",triggerHook:"0.6",reverse:!1}).setClassToggle(".zoomItIn","zoomIn").addTo(e),new ScrollMagic.Scene({triggerElement:".skill-container",triggerHook:"0.35",reverse:!1}).on("start",function(){new i.default}).addTo(e)}},function(e,t,n){"use strict";e.exports=function(){var e;!function(){var e=navigator.userAgent.indexOf("Opera Mini")>-1,t=navigator.userAgent.match(/^Mozilla\/5\.0 .+ Gecko\/$/);if(e||t){var n,o,r=document.querySelectorAll('link[rel="stylesheet"]');for(n=0;n<r.length;n++)(o=r[n]).parentNode.removeChild(o)}}(),e=navigator.userAgent.toLowerCase(),/chrome/.test(e)&&/android/.test(e)&&(document.querySelector(".header__intro").style.bottom="15%")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);tns({container:".slider",mode:"gallery",nav:!1,lazyload:!0,animateIn:"animateIn",animateOut:"animateOut",animateDelay:700,speed:2e3,prevButton:".controls--prev",nextButton:".controls--next",arrowKeys:!0})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){var t,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.from||(Array.from=(t=Object.prototype.toString,n=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},o=Math.pow(2,53)-1,r=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),o)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,i=arguments.length>1?arguments[1]:void 0;if(void 0!==i){if(!n(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,l=r(t.length),c=n(this)?Object(new this(l)):new Array(l),u=0;u<l;)a=t[u],c[u]=i?void 0===o?i(a,u):i.call(o,a,u):a,u+=1;return c.length=l,c}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.openModalButtons=Array.from(document.querySelectorAll(".open-modal")),this.modal=document.querySelector(".contact"),this.closeModalButton=document.querySelector(".contact__close"),this.events()}return o(e,[{key:"events",value:function(){var e=this;this.openModalButtons.forEach(function(t){t.addEventListener("click",e.openModal.bind(e))}),this.closeModalButton.addEventListener("click",this.closeModal.bind(this)),document.addEventListener("keyup",this.keyPressHandler.bind(this))}},{key:"openModal",value:function(e){e.preventDefault(),this.modal.classList.add("contact--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("contact--is-visible")}},{key:"keyPressHandler",value:function(e){27===e.keyCode&&this.closeModal()}}]),e}();t.default=r},function(e,t,n){"use strict";var o=a(n(8)),r=(a(n(0)),a(n(7))),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}var l=n(5),c=n(4),u=n(3),s=n(2),f=n(1);new r.default;l(),c(),u(),s(),f();new o.default,new i.default;Array.from(document.querySelectorAll(".contact-form__input")).forEach(function(e){e.addEventListener("input",function(){""!==e.value?e.previousElementSibling.classList.add("is-visible"):e.previousElementSibling.classList.remove("is-visible")})})}]);