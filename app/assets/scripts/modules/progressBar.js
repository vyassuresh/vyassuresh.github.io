export default class ProgressBar {

    constructor() {
        this.bars = Array.from(document.querySelectorAll(".progressBar__fill"));
        this.totalWidth = 0;
        this.setLoop();
    }

    setLoop() {
        this.bars.forEach(elm => {
            var valueElm = elm.parentElement.parentElement.querySelector('.skill__counter');
            var totalValue = valueElm.dataset.value;
            elm.style.width = `${totalValue}%`;
            this.animatedCounting(valueElm, totalValue);
        });
    }

    animatedCounting(valueElm, totalValue) {
        var counter = { number: 0};

        TweenMax.to(counter, 1, {
            number: totalValue,
            roundProps: "number",
            onUpdate: updateHandler,
            ease: Linear.easeNone
        });

        function updateHandler() {
            valueElm.innerHTML = `${counter.number}%`;
        }
    }
}