export default class Modal {
    constructor() {
        this.openModalButtons = Array.from(document.querySelectorAll('.open-modal'));
        this.modal = document.querySelector('.contact');
        this.closeModalButton = document.querySelector('.contact__close');
        this.events();
    }

    events() {
        this.openModalButtons.forEach(elm => {
            elm.addEventListener('click', this.openModal.bind(this));
        });
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    openModal(e) {
        e.preventDefault();
        this.modal.classList.add('contact--is-visible');
    }

    closeModal() {
        this.modal.classList.remove('contact--is-visible');
    }

    keyPressHandler(e) {
        if(e.keyCode === 27) {
            this.closeModal();
        }
    }
}