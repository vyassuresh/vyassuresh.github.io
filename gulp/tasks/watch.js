var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch(['./app/**/*.html', '!./app/index.html', '!./app/temp'], function() {
		gulp.start('prepareHtml');
		browserSync.reload();
	});

	watch('./app/assets/**/*.scss', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
    
    watch('./app/assets/images/icons/**/*.svg', function() {
        gulp.start('grunticon');
    });
});

gulp.task('cssInject', ['styles'], function() {

	return gulp.src('./app/assets/css/style.css')
	.pipe(browserSync.stream());

});


gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
