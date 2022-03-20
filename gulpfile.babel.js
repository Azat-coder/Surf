// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт плагинов
import { plugins } from './gulp/config/plugins';

// Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
}

// Импорт задач
import { copy } from './gulp/tasks/copy';
import { reset } from './gulp/tasks/reset';
import { html } from './gulp/tasks/html';
import { server } from './gulp/tasks/server';
import { scss } from './gulp/tasks/scss';
import { js } from './gulp/tasks/js';
import { images } from './gulp/tasks/images';
import { ttfToWoff, fontsStyle } from './gulp/tasks/fonts';
import { svgSprites } from './gulp/tasks/svgSprites';
import { zip } from './gulp/tasks/zip';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

// Просто экспортируем задачу, чтобы делать ее по требованию
export { svgSprites }

// Последовательная обработка шрифтов
const fonts = gulp.series(ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const createZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export { dev, build, createZIP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);