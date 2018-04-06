var mobileMenu = (function() {
    document.querySelector('.navigation__button').addEventListener('click', function() {
        this.querySelector('.navigation__icon').classList.toggle('navigation__icon--open');
        document.querySelector('.navigation__bg').classList.toggle('navigation__bg--is-visible');
        document.querySelector('.navigation__nav').classList.toggle('navigation__nav--is-visible');

        Array.from(document.querySelectorAll('.navigation__list li a')).forEach(function(current) {
            current.classList.toggle('is-visible');
        })
    });
});

module.exports = mobileMenu;