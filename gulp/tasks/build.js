var gulp = require('gulp'),
inlinesource = require('gulp-inline-source');
rename = require('gulp-rename'),
// imagemin = require('gulp-imagemin'),
// del = require('del'),
// usemin = require('gulp-usemin'),
// rev = require('gulp-rev'),
// browserSync = require('browser-sync').create();
 
gulp.task('inlinesource', function () {
    var options = {
        compress: false
    };
 
    return gulp.src('./app/main.html')
        .pipe(inlinesource(options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./app'));
});

// gulp.task('deleteDistFolder', ['inlinesource'], function () {
//     return del("./dist");
// });

// gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
//     var pathsToCopy = [
//         './app/**/*',
//         '!./app/index.html',
//         '!./app/assets/images/**',
//         '!./app/assets/css/**',
//         '!./app/assets/scripts/**',
//         '!./app/temp',
//         '!./app/temp/**'
//     ]

//     return gulp.src(pathsToCopy)
//         .pipe(gulp.dest("./dist"));
// });

// gulp.task('optimizeImages', ['deleteDistFolder'], function () {
//     return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
//         .pipe(imagemin({
//             progressive: true,
//             interlaced: true,
//             multipass: true
//         }))
//         .pipe(gulp.dest("./dist/assets/images"));
// });

// gulp.task('usemin', ['deleteDistFolder'], function () {
//     return gulp.src("./app/index.html")
//         .pipe(usemin({
//             css: [function () { return rev() }],
//             js: [function () { return rev() }]
//         }))
//         .pipe(gulp.dest("./dist"));
// });

// gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']); var gulp = require('gulp'),
//     imagemin = require('gulp-imagemin'),
//     del = require('del'),
//     usemin = require('gulp-usemin'),
//     rev = require('gulp-rev'),
//     browserSync = require('browser-sync').create();

// gulp.task('deleteDistFolder', function () {
//     return del("./dist");
// });

// gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
//     var pathsToCopy = [
//         './app/**/*',
//         '!./app/index.html',
//         '!./app/assets/images/**',
//         '!./app/assets/styles/**',
//         '!./app/assets/scripts/**',
//         '!./app/temp',
//         '!./app/temp/**'
//     ]

//     return gulp.src(pathsToCopy)
//         .pipe(gulp.dest("./dist"));
// });

// gulp.task('optimizeImages', ['deleteDistFolder'], function () {
//     return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
//         .pipe(imagemin({
//             progressive: true,
//             interlaced: true,
//             multipass: true
//         }))
//         .pipe(gulp.dest("./dist/assets/images"));
// });

// gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function () {
//     return gulp.src("./app/index.html")
//         .pipe(usemin({
//             css: [function () { return rev() }],
//             js: [function () { return rev() }]
//         }))
//         .pipe(gulp.dest("./dist"));
// });

// gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin', 'inlinesource']);