var Rellax = require('rellax');
var rellax = new Rellax('.header');

var vhFix = new VHChromeFix([
  {
    selector: '.header',
    vh: 100,
  },
    {
    selector: '.content-wrapper',
    vh: 100,
  }
]);

    
window.onscroll = function() {
    
    var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    
    if(scrollTop > 180) {
        document.querySelector('.header__intro').classList.add('fadeOut');
    }
    
    if(scrollTop < 180) {
        document.querySelector('.header__intro').classList.remove('fadeOut');
    }
}
