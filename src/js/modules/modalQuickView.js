export function modalQuickView() {
    const modalQuickView = document.querySelector('.modal-quickview');
    const modalQuickViewBtns = document.querySelectorAll('.btn--quickview');
    const quickViewBtnClose = document.querySelector('.modal-quickview__btn-close');

    modalQuickViewBtns.forEach(modalQuickViewBtn => {
        modalQuickViewBtn.addEventListener('click', () => {
            modalQuickView.classList.add('modal--active');
            main.classList.add('visually-hidden');
            header.classList.add('visually-hidden');
            footer.classList.add('visually-hidden');
        });
    });

    quickViewBtnClose.addEventListener('click', () => {
        modalQuickView.classList.remove('modal--active');
        main.classList.remove('visually-hidden');
        header.classList.remove('visually-hidden');
        footer.classList.remove('visually-hidden');
    });

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.modal__wrap')) {
            event.stopPropagation();
        } else if (target.closest('.modal')) {
            modalQuickView.classList.remove('modal--active');
            main.classList.remove('visually-hidden');
            header.classList.remove('visually-hidden');
            footer.classList.remove('visually-hidden');
        }
    });
}