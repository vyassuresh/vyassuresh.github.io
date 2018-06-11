var gulp = require('gulp'),
    svgmin = require('gulp-svgmin'),
    del = require('del');
require('gulp-grunt')(gulp);

gulp.task('minifySVG', ['deleteIconsOptim'], function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./app/temp/icons_optim'));
});

gulp.task('deleteIconsOptim', function() {
    return del("./temp/icons_optim");
});

gulp.task('deleteIcons', function() {
    return del("./app/assets/icons");
});

gulp.task('grunticon', ['minifySVG', 'deleteIcons'], function() {
    gulp.start('grunt-grunticon:myIcons')
});