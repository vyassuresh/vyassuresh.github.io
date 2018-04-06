var smoothScrolling = function() {

    Array.from(document.querySelectorAll('.navigation__list a')).forEach(function(current) {
        current.addEventListener('click', function(e) {
            e.preventDefault();

            var target = this.getAttribute('href');

            TweenMax.to(window, 1.5, { scrollTo: { 
                y: target,
                autokill: true,  
                ease: Circ.easeInOut
            } });
        })
    })
}

module.exports = smoothScrolling;