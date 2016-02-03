var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./src/client/sass/bundle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/js/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/client/sass/**/*.scss', ['sass']);
});