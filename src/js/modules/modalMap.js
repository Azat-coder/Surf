export function modalMap() {
    const modalMap = document.querySelector('.modal-map');
    const modalMapBtns = document.querySelectorAll('.btn--map');
    const mapBtnClose = document.querySelector('.modal-map__btn-close');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    modalMapBtns.forEach(modalMapBtn => {
        modalMapBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalMap.classList.add('modal--active');
            main.classList.add('visually-hidden');
            header.classList.add('visually-hidden');
            footer.classList.add('visually-hidden');
        });
    });

    mapBtnClose.addEventListener('click', () => {
        modalMap.classList.remove('modal--active');
        main.classList.remove('visually-hidden');
        header.classList.remove('visually-hidden');
        footer.classList.remove('visually-hidden');
    });

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.modal__wrap')) {
            event.stopPropagation();
        } else if (target.closest('.modal')) {
            modalMap.classList.remove('modal--active');
            main.classList.remove('visually-hidden');
            header.classList.remove('visually-hidden');
            footer.classList.remove('visually-hidden');
        }
    });
}