var browserHacks = (function() {

    function chromeOnAndroid() {
        var userAgent = navigator.userAgent.toLowerCase();
        var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);
        if (isAndroidChrome) {
            document.querySelector('.header__intro').style.bottom = '15%';
        }
    }

    function operaAndUC() {
        var isOperaMini = (navigator.userAgent.indexOf("Opera Mini") > -1),
            isUCMini = (navigator.userAgent.match(/^Mozilla\/5\.0 .+ Gecko\/$/));

        if (isOperaMini || isUCMini) {

            var stylesheets= document.querySelectorAll('link[rel="stylesheet"]'), i, sheet;

            for (i = 0; i < stylesheets.length; i++) {
                sheet = stylesheets[i];

                sheet.parentNode.removeChild(sheet);
            }
        }
    }

    operaAndUC();
    chromeOnAndroid();
});

module.exports = browserHacks;

