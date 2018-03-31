var gulp = require('gulp'),
inlinesource = require('gulp-inline-source');
rename = require('gulp-rename'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
imagemin = require('gulp-imagemin'),
browserSync = require('browser-sync').create();
htmlImport = require('gulp-html-import'),
uglify = require('gulp-uglify'),
require('gulp-grunt')(gulp);

gulp.task('previewDist', function() {
    browserSync.init({
		notify: false,
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('deleteindexHtml', function () {
    return del("./app/index.html");
});

gulp.task('deleteDistFolder', function () {
    return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('copyGruntIcons', ['deleteDistFolder'], function () {
    return gulp.src(['./app/temp/icons/**/*', '!./app/temp/icons/grunticon.loader.js', '!./app/temp/icons/preview.html'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/icons"));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'grunt-grunticon:myIcons'], function () {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function () {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function () { return rev() }],
            js: [function () { return rev() }, function(){ return uglify()}]
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin', 'copyGruntIcons']);