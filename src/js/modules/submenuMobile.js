export function useSubmenuMobile() {
    const menu = document.querySelector('.nav__list');
    const menuLinks = menu.children;
    const submenuMobile = document.querySelector('.submenu-mobile');
    const submenuMobileLists = submenuMobile.querySelectorAll('.submenu-mobile__list');
    const submenuCloseButton = document.querySelector('.submenu-mobile__btn');

    for (let index = 0; index < menuLinks.length; index++) {
        const menuLink = menuLinks[index];

        menuLink.addEventListener('click', () => {
            const submenuMobileList = submenuMobileLists[index];
            const submenuCloseButton = submenuMobileList.querySelector('.submenu-mobile__btn');

            if (submenuMobileList.childElementCount > 1) {
                submenuMobileList.classList.add('submenu-mobile__list--active');
            }

            submenuCloseButton.addEventListener('click', (closeBtn) => {
                submenuMobileList.classList.remove('submenu-mobile__list--active');
            });
        });
    }

    submenuCloseButton.addEventListener('click',() => {
        submenuMobile.classList.remove('submenu-mobile--active');
    });
}