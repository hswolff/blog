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
                tasks: ['livereload']
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
            options: {
                // dryRyn: true,  // un-comment to test rsync
                recursive: true,
                syncDest: false,
                exclude: ['.git*', 'node_modules', '.sass-cache',
                        'Gruntfile.js', 'package.json', '.DS_Store',
                        'README.md', 'config.rb']
            },
            production: {} // loaded externally
        }

    });
    var rsyncProduction = require('./config-rsync-prod');
    rsyncProduction = grunt.util._.defaults( rsyncProduction, grunt.config('rsync.options') );
    grunt.config('rsync.production', rsyncProduction );

    grunt.registerTask('dist', [
        'compass:dist',
        'rsync:production'
    ]);

    // register task
    grunt.registerTask('default', [
        'compass:dev',
        // 'imagemin',
        'livereload-start',
        'regarde'
    ]);

};
