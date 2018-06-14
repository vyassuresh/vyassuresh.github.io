var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    rucksack = require('rucksack-css'),
    postcssUnits = require('postcss-units'),
    postcssSize = require('postcss-size'),
    postcssCenter = require('postcss-center'),
    wait = require('gulp-wait');

gulp.task('styles', function() {
    var processors = [
        rucksack,
        postcssUnits({
            size: 16
        }),
        postcssCenter,
        autoprefixer,
        postcssSize,
        cssnano
    ];
    return gulp.src('./app/assets/scss/style.scss')
        .pipe(wait(800))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/assets/css'));
});