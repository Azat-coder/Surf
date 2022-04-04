import * as funcs from './modules/functions.js';
import { mainMenu } from './modules/mainMenu.js';
import { popularGoodsTabs } from './modules/popularGoodsTabs.js';
import { modalRequest } from './modules/modalRequest.js';
import { modalQuickView } from './modules/modalQuickView.js';
import { useSelect } from './modules/select.js';
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

funcs.isWebp(); // Добавляет класс к html в зависимости от поддержки webp браузером
mainMenu(); // Главное меню
popularGoodsTabs(); // Табы в разделе popular-goods
modalRequest(); // Модальное окно заявка
modalQuickView(); // Модальное окно быстрый просмотр товара
modalMap(); // Модальное окно карта
useSelect(); // Имплементирует кастомный селект для раздела catalog





