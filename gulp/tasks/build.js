var gulp = require('gulp'),
inlinesource = require('gulp-inline-source');
rename = require('gulp-rename');
 
gulp.task('inlinesource', function () {
    var options = {
        compress: false
    };
 
    return gulp.src('./app/main.html')
        .pipe(inlinesource(options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./app'));
});