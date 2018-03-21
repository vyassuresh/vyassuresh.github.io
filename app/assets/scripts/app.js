var menu = function () {
    var myMenu = {
        button: document.querySelector('.navigation__button'),
        nav: document.querySelector('.navigation__nav')
    }

    myMenu.button.addEventListener('click', function () {
        this.classList.toggle('navigation__button--close');
        this.classList.toggle('navigation__button--open');
        myMenu.nav.classList.toggle('navigation__nav--open');
    });
}

menu();

var options = [
  {
    selector: '.header',
    vh: 100,
  }
];

var vhFix = new VHChromeFix(options);
