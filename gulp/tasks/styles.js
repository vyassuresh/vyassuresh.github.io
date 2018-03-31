var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    fixes = require('postcss-fixes'),
    cssnano = require('cssnano'),
    rucksack = require('rucksack-css'),
    postcssUnits = require('postcss-units'),
    postcssSize = require('postcss-size');
    postcssCenter = require('postcss-center');

gulp.task('styles', function() {
    var processors = [
        rucksack,
        postcssUnits({
            size: 16
        }),
        postcssCenter,
        autoprefixer,
        fixes,
        postcssSize
    ];
    return gulp.src('./app/assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/assets/css'));
});