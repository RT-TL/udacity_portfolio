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
        },

        // create images of different resolutions for responsive sourcing
        responsive_images: {
            img_multi_resolutions: {
                options: {
                    sizes: [{
                        name: "small",
                        width: 400
                    }, {
                        name: "medium",
                        width: 800
                    }, {
                        name: "large",
                        width: 1200
                    }, {
                        name: "xxl",
                        width: 2000
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**/*.{jpg,gif,png}', '!**/responsive/**'],
                    cwd: 'img-source/',
                    dest: 'resources/img/responsive/'
                }]
            }
        },

        // minimize all images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'resources/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'resources/img/'
                }]
            }
        },

    });

    // Load Grunt Task Modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');

    // Define default tasks to run
    grunt.registerTask('default', ['less', 'cssmin', 'responsive_images', 'imagemin']);
};