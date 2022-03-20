import webpack from "webpack-stream"; // Подключает WEBPACK
import babel from "gulp-babel"; // Подключает babel
import eslint from 'gulp-eslint'; // Добавляет ESLint (если установлено расширение в среде разработки, лучше использовать его)

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ 
                title: "JS",
                message: "Error: <%= error.message %>"
            }))
        )
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'main.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};