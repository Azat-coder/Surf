export function paramsFilterBtn() {
    const filterButton = document.querySelector('.catalog__filter');
    const paramsElement = document.querySelector('.params');

    if (!filterButton) {
        return;
    }

    filterButton.addEventListener('click', () => {
        paramsElement.classList.toggle('params--active');
    });
}