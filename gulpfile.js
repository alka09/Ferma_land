let gulp = require('gulp');
let rename = require('gulp-rename');
let prepros = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync').create();
let cleancss = require('gulp-clean-css');
let gcmq = require('gulp-group-css-media-queries');

function css_style(done) {

    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(prepros({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(gcmq())
        .pipe(autoprefixer(
            ['last 2 versions'],
            {cascade: false }))
        .pipe(cleancss({
            level: 2
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}

function sync(done) {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });

    done();
}

function browserReload(done) {

    browserSync.reload();

    done();
}

function watchSass(){
    gulp.watch("./scss/**/*.scss", css_style);
    //gulp.watch("./js/**/*.js", js_style);
}

function watchFiles(){
    gulp.watch("./scss/**/*.scss", css_style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.php", browserReload);
    gulp.watch("./**/*.js", browserReload);
    //gulp.watch("./js/**/*.js", js_style);
}

gulp.task('default', gulp.parallel(watchFiles, sync));
gulp.task(sync);