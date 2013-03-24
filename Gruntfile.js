module.exports = function(grunt) {
    'use strict';

    // load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        theme: {
            root: 'wp-content/themes/harrywolff_2',
            assets: '<%= theme.root %>/library'
        },

        // compass and scss
        compass: {
            options: {
                sassDir: '<%= theme.assets %>/scss',
                cssDir: '<%= theme.assets %>/css',
                imagesDir: '<%= theme.assets %>/images',
                javascriptsDir: '<%= theme.assets %>/js',
                force: true
                // relativeAssets: true
            },
            dev: {
                options: {
                    environment: 'development'
                }
            },
            dist: {
                options: {
                    environment: 'production',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },

        // regarde to watch for changes and trigger compass, jshint, uglify and live reload
        regarde: {
            compass: {
                files: '<%= theme.assets %>/scss/**/*',
                tasks: ['compass']
            },
            js: {
                files: '<%= theme.assets %>/js/**/*',
                tasks: ['jshint', 'uglify', 'livereload']
            },
            livereload: {
                files: [
                    '<%= theme.assets %>/css/*.css',
                    '<%= theme.root %>/**/*.php'
                ],
                tasks: ['livereload']
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= theme.assets %>/images/',
                    src: '**/*',
                    dest: '<%= theme.assets %>/images-optimized/'
                }]
            }
        },

        // deploy via rsync
        rsync: {
            staging: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb']
            },
            production: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: '<%= rsync.staging.exclude %>'
            }
        }

    });

    grunt.registerTask('dist', [
        'compass:dist'
    ]);

    // register task
    grunt.registerTask('default', [
        'compass:dev',
        // 'imagemin',
        'livereload-start',
        'regarde'
    ]);

};
