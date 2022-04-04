export function modalRequest() {
    const modal = document.querySelector('.modal-request');
    const modalBtns = document.querySelectorAll('.btn--request');
    const btnClose = document.querySelector('.modal__btn-close');
    const focusInput = document.querySelector('#modal-request__name');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');


    modalBtns.forEach(modalBtn => {
        modalBtn.addEventListener('click', () => {
            modal.classList.add('modal--active');
            focusInput.focus();
            main.classList.add('visually-hidden');
            header.classList.add('visually-hidden');
            footer.classList.add('visually-hidden');
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