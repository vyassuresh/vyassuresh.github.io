var gulp = require('gulp'),
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
    postcssSCSS = require('postcss-scss');


gulp.task('styles', function() {
    var processors = [
        postcssUnits({
            size: 16
        }),
        size,
        rucksack(),
        postcssCenter,
        autoprefixer,
        fixes
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