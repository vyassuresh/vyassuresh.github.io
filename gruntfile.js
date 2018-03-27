module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		grunticon: {
			myIcons: {
					files: [{
						expand: true,
						cwd: 'app/temp/icons_optim',
						src: ['*.svg', '*.png'],
						dest: "app/temp/icons"
					}],
				options: {
					loadersnippet: "grunticon.loader.js",
					defaultWidth: "50px",
					defaultHeight: "50px",
                    enhanceSVG: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.registerTask('default', ['grunticon:myIcons']);
};