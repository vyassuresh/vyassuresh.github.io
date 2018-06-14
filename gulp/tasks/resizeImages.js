var gulp = require('gulp'),
imageResize = require('gulp-image-resize'),
rename = require('gulp-rename');

var resizeImageTasks = [];

[320, 750, 1200, 1600, 2000].forEach(function (size) {
    var resizeImageTask = 'resize_' + size;

        gulp.task(resizeImageTask, function () {
            return gulp.src(['app/assets/images/code.jpg'])
                .pipe(imageResize({
                    width: size,
                    quality: 70,
                    format: 'jpeg'
                }))
                .pipe(rename(function (path) { path.basename += '-' + size }))
                .pipe(gulp.dest('app/assets/images'));

        });
        resizeImageTasks.push(resizeImageTask);
});

gulp.task('resize_images', resizeImageTasks);