import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Вывод сообщений
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновлений файлов
import ifPlugin from "gulp-if"; // Условные конструкции

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
};