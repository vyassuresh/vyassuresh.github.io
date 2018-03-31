var gulp = require('gulp'),
imageResize = require('gulp-image-resize'),
rename = require('gulp-rename'),
imagemin = require('gulp-imagemin');

gulp.task('resizeImages', function() {
    return gulp.src('app/assets/images/cup-of-coffee.jpg')
        .pipe(responsive({
            width: 800,
            quality: 75,
            format: 'jpeg',
            interlace: true
            }))
        .pipe(rename(function (path) { path.basename += "-800"; }))
        .pipe(gulp.dest('app/assets/images'));
});

var resizeImageTasks = [];

[320, 750, 1200, 1600].forEach(function (size) {
    var resizeImageTask = 'resize_' + size;

    gulp.task(resizeImageTask, function () {
        return gulp.src('app/assets/images/flowers.jpg')
            .pipe(imageResize({
                width: size*2,
                quality: 75,
                format: 'jpeg'
            }))
            .pipe(imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 })
            ]))
            .pipe(rename(function (path) { path.basename += '-' + size + '-2x'; }))
            .pipe(gulp.dest('app/assets/images'));
    });
    resizeImageTasks.push(resizeImageTask);
});

gulp.task('resize_images', resizeImageTasks);