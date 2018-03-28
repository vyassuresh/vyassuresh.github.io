var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    mqpacker = require('css-mqpacker'),
    autoprefixer = require('autoprefixer'),
    size = require('postcss-size'),
    fixes = require('postcss-fixes'),
    cssnano = require('cssnano'),
    rucksack = require('rucksack-css'),
    postcssUnits = require('postcss-units'),
    postcssCenter = require('postcss-center'),
    syntax_scss = require('postcss-scss'),
    colorblindPlugin = require("postcss-colorblind");


gulp.task('styles', function() {
    var processors = [
        rucksack,
        postcssUnits({
            size: 16
        }),
        size,
        postcssCenter,
        autoprefixer,
        fixes
    ];
    return gulp.src('./app/assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors, {
            syntax: syntax_scss
        }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/assets/css'));
});