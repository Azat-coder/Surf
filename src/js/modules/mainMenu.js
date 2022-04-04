export function mainMenu() {
    const mainMenu = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        mainMenu.classList.toggle('nav__list--active');
        hamburger.classList.toggle('hamburger--active');
    });

    const menuLinks = document.querySelectorAll('.nav__link');

    for(let menuLink of menuLinks) {
        menuLink.addEventListener('click', (elem) => {
        
            elem.preventDefault();
            let scrollToElem = menuLink.getAttribute('href');
            let coordinates = document.querySelector(scrollToElem).offsetTop;
            window.scrollTo({
                top: coordinates - 100,
                behavior: 'smooth'
            });
        
            mainMenu.classList.toggle('nav__list--active');
        });
    }
}