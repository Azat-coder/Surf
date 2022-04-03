import * as funcs from './modules/functions.js';
import MyString from './string.js';

// Класс для работы со строкой
const myString = new MyString('Привет');
console.log('myString.string: ', myString.string);
console.log('myString.getString(): ', myString.getString());
myString.setString('Новая строка');
console.log('myString.string: ', myString.string);
console.log('myString.getStringLength(): ', myString.getStringLength());
console.log('myString.toString(): ', myString.toString());
console.log('+myString: ', +myString, 'Язык JavaScript не поддерживает operator overloading');
console.log('myString.toNumber(): ', myString.toNumber());

funcs.isWebp();

// Главное меню
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

// Табы популярные товары
const categoryBtns = document.querySelectorAll('.popular-goods__category-link');
const categoryTabs = document.querySelectorAll('.popular-goods__tab');

const removeActiveClasses = () => {
    categoryBtns.forEach((btn) => {
        btn.classList.remove('popular-goods__category-link--active');
    });

    categoryTabs.forEach((tab) => {
        tab.classList.add('visually-hidden');
    });
};

for (let i = 0; i < categoryBtns.length; i++) {
    const btn = categoryBtns[i];
    const tab = categoryTabs[i];

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveClasses();
        btn.classList.add('popular-goods__category-link--active');
        tab.classList.remove('visually-hidden');
    });
}

// Модальное окно заявка
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

// Модальное окно быстрый товар
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

// Модальное окно карта
const modalMap = document.querySelector('.modal-map');
const modalMapBtns = document.querySelectorAll('.btn--map');
const mapBtnClose = document.querySelector('.modal-map__btn-close');

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

//Селекты каталог
const selects = document.querySelectorAll('.select');

selects.forEach((select) => {
    select.addEventListener('click', () => {
        const optionList = select.nextElementSibling;
        const changingText = select.querySelector('.changing-text');
        optionList.classList.toggle('visually-hidden');

        if (!optionList.classList.contains('visually-hidden')) {
            const options = optionList.querySelectorAll('.option');

            options.forEach((option) => {
                option.addEventListener('click', () => {
                    const optionText = option.textContent || option.firstElementChild.textContent;
                    changingText.innerHTML = optionText;
                    optionList.classList.add('visually-hidden');
                });
            });
        }

        document.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.option-list') || target.closest('.select')) {
                event.stopPropagation();
            } else if (target.closest('body')) {
                optionList.classList.add('visually-hidden');
            }
        });
    });
});





