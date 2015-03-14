module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				banner: '/*minified using grunt <%=grunt.template.today("mm-dd-yyyy hh:MM:ss") %> */\n'
			},
			target: {
				files: {
					'js/perfmatters.min.js': ['js/perfmatters.js']
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*minified using grunt <%=grunt.template.today("mm-dd-yyyy hh:MM:ss") %> */\n'
			},
			target: {
				files: {
					'css/print.min.css': ['css/print.css'],
					'css/style.min.css': ['css/style.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'cssmin', 'uglify' ]);
};