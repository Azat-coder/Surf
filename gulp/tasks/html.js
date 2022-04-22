// import fileinclude from "gulp-file-include";
// import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number"; // Для версионирования Css и Js
import pug from "gulp-pug"; // Для работы с шаблонизатором Pug
import htmlmin from "gulp-htmlmin"; // Для минификации HTML файла
import gulpHtmlBemValidator from 'gulp-html-bem-validator'; // Для валидации БЭМ нейминга
import validateHtmlPipeline from 'pipeline-validate-html'; // Для валидации HTML

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ 
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
    // .pipe(fileinclude())
        .pipe(pug({
            // Сжатие HTML файла
            pretty: true,
            // Показывать в терминале, какой файл обработан
            verbose: true,
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         webpHtmlNosvg()
        //     )
        // )
        .pipe(
            app.plugins.if(
                app.isBuild,
                htmlmin({ collapseWhitespace: true })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    },
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(gulpHtmlBemValidator())
        .pipe(validateHtmlPipeline.validateHTML())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};