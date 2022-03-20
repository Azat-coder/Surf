import fs from 'fs';
import ttf2Woff from 'gulp-ttf-to-woff';  // Конвертирование из формата .ttf в .woff
import ttf2woff2 from 'gulp-ttf2woff2'; // Конвертирование из формата .ttf в .woff2

export const ttfToWoff = () => {
    // Ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ 
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
    // Конвертируем в .woff
        .pipe(ttf2Woff())
    // Выгружаем в папку с результатом
        .pipe(app.gulp.dest(app.path.build.fonts))
    // Ищем файлы шрифтов .ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    // Конвертируем в .woff2
        .pipe(ttf2woff2())
    // Выгружаем в папку c результатом
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
    function cb() {};
    // Находим файл стилей подключения шрифтов
    const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    // Проверяем, существуют ли файлы шрифтов
    fs.readdir(`${app.path.buildFolder}/fonts/`, function(err, fontsFiles) {
        if (fontsFiles) {
            // Проверяем, существует ли файл стилей подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // Если файла нет, создаем его
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;

                for (let i = 0; i < fontsFiles.length; i++) {
                    // Записываем подключения шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split('.')[0];

                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }

                        fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                // Если файл есть, выводим сообщение
                console.log("Файл scss/fonts.scss уже существует. Для обновления содержимого файла, его нужно удалить");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
};