var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./public/sass/bundle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('compress', function() {
    return gulp.src('./public/js/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});