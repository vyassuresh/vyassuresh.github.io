var fixChromeAndroid = (function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);
    if (isAndroidChrome) {
        document.querySelector('.header__intro').style.bottom = '15%';
    }
});

module.exports = fixChromeAndroid;