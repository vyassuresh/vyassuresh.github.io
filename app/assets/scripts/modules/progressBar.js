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
        });
    }
}