import * as funcs from './modules/functions.js';
import { mainMenu } from './modules/mainMenu.js';
import { tabs } from './modules/tabs.js';
import { modal } from './modules/modal.js';
import { useSelect } from './modules/select.js';
import { useRangeSlider } from './modules/rangeSlider.js';
import { paramsFilterBtn } from './modules/paramsFilterBtn.js';
import { useHoverImage } from './modules/hoverImage.js';  
// import MyString from './string.js';
import './nouislider.min.js';
import { useAccordion } from './modules/accordion.js';
import { useSubmenuMobile } from './modules/submenuMobile.js';
// import * as classes from './user.js';
import { Slider } from './sliderClass.js';
import { cart } from './modules/cart.js';
import { formValidate } from './modules/formValidate.js';

// Класс для работы со строкой
// const myString = new MyString('Привет');
// console.log('myString.string: ', myString.string);
// console.log('myString.getString(): ', myString.getString());
// myString.setString('Новая строка');
// console.log('myString.string: ', myString.string);
// console.log('myString.getStringLength(): ', myString.getStringLength());
// console.log('myString.toString(): ', myString.toString());
// console.log('+myString: ', +myString, 'Язык JavaScript не поддерживает operator overloading');
// console.log('myString.toNumber(): ', myString.toNumber());

funcs.isWebp(); // Добавляет класс к html в зависимости от поддержки webp браузером
mainMenu(); // Главное меню
tabs('popular-goods__category-link', 'popular-goods__tab'); // Табы в разделе popular-goods
tabs('product-description__category-link', 'product-description_tab'); // Табы в разделе product-description
tabs('tour__category-link', 'tour__tab'); // Табы в разделе tour
modal('modal-request', 'btn--request', 'modal__btn-close', 'modal-request__name'); // Модальное окно заявка
modal('modal-quickview', 'btn--quickview','modal-quickview__btn-close'); // Модальное окно быстрый просмотр товара
modal('modal-map', 'btn--map', 'modal-map__btn-close'); // Модальное окно карта
useSelect(); // Имплементирует кастомный селект для раздела catalog
useRangeSlider(); // Имплементирует кастомный range slider для раздела catalog
paramsFilterBtn(); // Кнопка настроек для раздела catalog
useHoverImage(); // Ховер эффект на картинках товаров в разделе product-description
useAccordion('article', 768); //Аккордеон в разделе article
useAccordion('tour'); //Аккордеон в разделе tour
useSubmenuMobile(); // Мобильное подменю
cart();  // Корзина товаров
formValidate();

// Классы для пользователей
// const user = new classes.User('Azat', new Date(2022, 1, 1));
// const admin = new classes.Admin('Thor', new Date(2022, 1, 1), true);
// const guest = new classes.Guest('Loki', new Date(2018,11,12));
// console.log(user.getInfo());
// console.log(admin.getInfo());
// console.log(guest.getInfo());

if(document.querySelector('#catalog') || document.querySelector('#about-us') || document.querySelector('#catalog-category')) {
    new Slider('.populargoods-common__inner', {});
}

if(document.querySelector('#main')) {
    new Slider('.tab-wetsuits', {});
    new Slider('.tab-surfboards', { transition_duration: 1.5 });
    new Slider('.tab-wakesurfs', {});
    new Slider('.tab-cases', {});
    new Slider('.tab-fins', {});
    new Slider('.blog__inner', {});
}