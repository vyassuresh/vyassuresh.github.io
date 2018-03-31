var gulp = require('gulp'),
    inlinesource = require('gulp-inline-source');
    rename = require('gulp-rename'),
    del = require('del'),
    htmlImport = require('gulp-html-import');

gulp.task('importHtml', ['deleteindexHtml'], function () {
    gulp.src('./app/main.html')
        .pipe(htmlImport('./app/components/'))
        .pipe(rename('index2.html'))
        .pipe(gulp.dest('./app/temp'));
})

gulp.task('inlinesource', ['importHtml'], function () {
    var options = {
        compress: false
    };
    return gulp.src('./app/temp/index2.html')
        .pipe(inlinesource(options))
        .pipe(rename("index.html"))
        .pipe(gulp.dest('./app'));
});

gulp.task('prepareHtml', ['inlinesource', 'importHtml', 'deleteindexHtml']);

gulp.task('deleteindexHtml', function () {
    return del("./app/index.html");
});