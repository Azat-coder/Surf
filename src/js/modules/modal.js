export function modal(modalClass, modalBtnClass, btnCloseClass, focusInputId) {
    const modal = document.querySelector(`.${modalClass}`);
    const modalBtns = document.querySelectorAll(`.${modalBtnClass}`);
    const btnClose = document.querySelector(`.${btnCloseClass}`);
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (!modal) {
        return;
    }

    modalBtns.forEach(modalBtn => {
        modalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal--active');
            main.classList.add('visually-hidden');
            header.classList.add('visually-hidden');
            footer.classList.add('visually-hidden');

            if (focusInputId) {
                const focusInput = document.querySelector(`#${focusInputId}`);
                focusInput.focus();
            }     
        });
    });

    btnClose.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        main.classList.remove('visually-hidden');
        header.classList.remove('visually-hidden');
        footer.classList.remove('visually-hidden');
    });

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.modal__wrap')) {
            event.stopPropagation();
        } else if (target.closest('.modal')) {
            modal.classList.remove('modal--active');
            main.classList.remove('visually-hidden');
            header.classList.remove('visually-hidden');
            footer.classList.remove('visually-hidden');
        }
    });
}