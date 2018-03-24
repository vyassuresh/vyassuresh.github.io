var mobileMenu = function() {
    document.querySelector('.navigation__button').addEventListener('click', function() {
        this.querySelector('.navigation__icon').classList.toggle('navigation__icon--open');
    });
}

module.exports = mobileMenu;