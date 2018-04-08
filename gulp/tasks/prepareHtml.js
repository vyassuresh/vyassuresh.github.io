var gulp = require('gulp'),
    rename = require('gulp-rename'),
    include = require('gulp-include'),
    htmlmin = require('gulp-htmlmin');

gulp.task('prepareHtml', function() {
    return gulp.src('./app/main.html')
        .pipe(include({
            hardFail: true
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./app'))
})