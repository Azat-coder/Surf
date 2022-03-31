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
const modalBtn = document.querySelector('.btn--request');
const btnClose = document.querySelector('.modal-request__btn-close');
const nameInput = document.querySelector('#modal-request__name');

modalBtn.addEventListener('click', () => {
    modal.classList.add('modal--active');
    nameInput.focus();
});

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.closest('.modal__wrap')) {
        event.stopPropagation();
    } else if (target.closest('.modal')) {
        modal.classList.remove('modal--active');
    }
});
