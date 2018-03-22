var gulp = require('gulp');
require('gulp-grunt')(gulp);
var svgmin = require('gulp-svgmin');

gulp.task('minifySVG', function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./app/temp/icons_optim'));
});

gulp.task('grunticon', ['minifySVG'], function() {
    gulp.start('grunt-grunticon:myIcons')
});