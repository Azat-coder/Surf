import * as funcs from './modules/functions.js';
import { mainMenu } from './modules/mainMenu.js';
import { tabs } from './modules/tabs.js';
import { modal } from './modules/modal.js';
import { useSelect } from './modules/select.js';
import { useRangeSlider } from './modules/rangeSlider.js';
import { paramsFilterBtn } from './modules/paramsFilterBtn.js';
import { useHoverImage } from './modules/hoverImage.js';  
import './nouislider.min.js';
import { useAccordion } from './modules/accordion.js';
import { useSubmenuMobile } from './modules/submenuMobile.js';
import { Slider } from './sliderClass.js';
import { cart } from './modules/cart.js';
import { formValidate } from './modules/formValidate.js';
import { reviewImages } from './modules/reviewImages.js';

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
formValidate(); // Валидация формы заявки
reviewImages(); // Переключение изображений в секции tour


if(document.querySelector('#catalog') || document.querySelector('#about-us') || document.querySelector('#catalog-category') || document.querySelector('#category')) {
    new Slider('.populargoods-common__inner', {});
}

if(document.querySelector('#main')) {
    new Slider('.tab-wetsuits', {});
    new Slider('.tab-surfboards', { transition_duration: 1.5 });
    new Slider('.tab-wakesurfs', {});
    new Slider('.tab-cases', { autoplay: true });
    new Slider('.tab-fins', { loop: true });
    new Slider('.blog__inner', {});
}