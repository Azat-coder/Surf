export function mainMenu() {
    const mainMenu = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        mainMenu.classList.toggle('nav__list--active');
        hamburger.classList.toggle('hamburger--active');
    });
}