export default class Slider {
    constructor() {
        var slider = tns({
            container: '.slider',
            mode: 'gallery',
            nav: false,
            lazyload: true,
            animateIn: 'animateIn',
            animateOut: 'animateOut',
            animateDelay: 700,
            speed: 2000,
            prevButton: '.controls--prev',
            nextButton: '.controls--next',
            arrowKeys: true
        });
    }
}