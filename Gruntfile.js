module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            prod: {
                options: {
                    compress: true
                },
                files: {
                    "app/css/app.min.css": [
                        "app/less/app.less"
                    ]
                }
            }
        },
        watch: {
            less: {
                files: ['app/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }

        }
    });

    grunt.option('color', false);

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Task definition
    grunt.registerTask('build', ['less']);
    grunt.registerTask('default', ['watch']);
};
