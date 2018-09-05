var gulp = require ('gulp'),
    watch = require ('gulp-watch'),
    sass = require ('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('server',['sass'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('css/*.scss',['sass']).on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('css/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
});
