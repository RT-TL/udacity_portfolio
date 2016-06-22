module.exports = function(grunt) {

    // Define grund tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Create less files
        less: {
            production: {
                options: {
                    paths: ['/less']
                },
                files: {
                    'resources/css/production.css': 'less/layout.less',
                }
            }
        },

        // minify css production file
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'resources/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'resources/css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load Grunt Task Modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Define default tasks to run
    grunt.registerTask('default', ['less', 'cssmin']);
};