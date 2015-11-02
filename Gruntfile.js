module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            // define the files to lint
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            files: ['app.js', 'Gruntfile.js']
        },

        watch: {
            files: ['<%= jshint.files %>', 'index.html'],
            tasks: ['jshint'],
            options: {
                livereload: true
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 9010,
                    open: true
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("serve", ["connect:server", "watch"]);

};