const gulp = require("gulp");
const { parallel, series, pipe } = require("gulp");

const sass = require('gulp-sass');
sass.compiler = require('sass');
const Fiber = require('fibers')
const browserSync = require("browser-sync").create(); //https://browsersync.io/docs/gulp#page-top
const babel = require('gulp-babel');

// Scripts
function js(cb) {
    gulp.src("./src/js/*.js")
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest("dist/js"));
    cb();
}

// Compile Sass
function css(cb) {
    gulp.src("./src/scss/*.scss")
    .pipe(sass({
        fiber: Fiber
    }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
    cb();
}

// Process HTML
function html(cb) {
    gulp.src("./src/html/*.html")
    .pipe(gulp.dest("dist/"));
    cb();
}

// Watch Files
function watch_files() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
    gulp.watch("./src/scss/*.scss", css);
    gulp.watch("./src/js/*.js", js);
    gulp.watch("./src/html/*.html", html);
    gulp.watch("./dist/**/**.*").on("change", browserSync.reload);
}

// Default 'gulp' command with start local server and watch files for changes.
exports.default = series(html, css, js, watch_files);

// 'gulp build' will build all assets but not run on a local server.
exports.build = parallel(html, css, js);