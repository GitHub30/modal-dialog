/**
 * Created by inoue on 16/10/13.
 */

export default class ModalDialog {
    constructor() {
        this.rootElement = document.querySelector('.js-modal');
        this.dialogElements = document.querySelectorAll('.js-modal_dialog');

        this.rootElement.addEventListener('click', () => {
            this.close();
        });

        this.dialogElements.forEach((dialogElement) => {
            dialogElement.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    isOpen() {
        return this.rootElement.classList.contains('modal--visible');
    }

    open(dialogElement) {
        ModalDialog.lockScroll(true);
        this.rootElement.classList.add('modal--visible');
        dialogElement.classList.add('modal_dialog--visible');
    }

    close() {
        this.dialogElements.forEach((dialogElement) => {
            dialogElement.classList.remove('modal_dialog--visible');
        });
        this.rootElement.classList.remove('modal--visible');
        ModalDialog.lockScroll(false);
    }

    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.close();
        }
    }

    static lockScroll(isLock) {
        document.body.style.overflowY = isLock ? 'hidden' : 'auto';
    }
}