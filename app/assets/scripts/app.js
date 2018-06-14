var browserHacks = require('./modules/browserHacks.js');
var scrollEvents = require('./modules/scrollEvents');
var mobileMenu = require('./modules/mobileMenu.js');
var projectSlider = require('./modules/projectSlider.js');
var parallax = require('./modules/parallax.js');
var smoothScrolling = require('./modules/smoothScrolling.js');
import Modal from "./modules/modal";
import ProgressBar from './modules/progressBar';

browserHacks();
scrollEvents();
mobileMenu();
projectSlider();
parallax();
smoothScrolling();
var modal = new Modal();

const inputs = Array.from(document.querySelectorAll('.contact-form__input'));
inputs.forEach(el => {
    el.addEventListener('input', () => {
        if (!(el.value === '')) {
            el.previousElementSibling.classList.add('is-visible');
        } else {
            el.previousElementSibling.classList.remove('is-visible');
        }
    });
});