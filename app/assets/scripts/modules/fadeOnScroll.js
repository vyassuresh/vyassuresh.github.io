var fadeOnScroll = function() {
    window.onscroll = function () {

        var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTop > 180) {
            document.querySelector('.header__intro').classList.add('fadeOut');
        }

        if (scrollTop < 180) {
            document.querySelector('.header__intro').classList.remove('fadeOut');
        }
    }
}

module.exports = fadeOnScroll;