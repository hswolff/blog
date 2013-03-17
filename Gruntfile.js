module.exports = function(grunt) {
    'use strict';

    // load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        theme: {
            root: 'content/themes/harrywolff_2',
            assets: '<%= theme.root %>/library'
        },

        // live reload, in case you want to change the port or anything
        // livereload: {
        // },

        // uglify to concat, minify, and make source maps
        // uglify: {
        //     dist: {
        //         options: {
        //             sourceMap: 'assets/js/map/source-map.js'
        //         },
        //         files: {
        //             'assets/js/plugins.min.js': [
        //                 'assets/js/source/plugins.js',
        //                 'assets/js/vendor/**/*.js',
        //                 '!assets/js/vendor/modernizr*.js'
        //             ],
        //             'assets/js/main.min.js': [
        //                 'assets/js/source/main.js'
        //             ]
        //         }
        //     }
        // },

        // compass and scss
        compass: {
            dist: {
                options: {
                    sassDir: '<%= theme.assets %>/scss',
                    cssDir: '<%= theme.assets %>/css',
                    imagesDir: '<%= theme.assets %>/images',
                    force: true
                    // relativeAssets: 'true'
                }
            }
        },

        // regarde to watch for changes and trigger compass, jshint, uglify and live reload
        regarde: {
            compass: {
                files: '<%= theme.assets %>/scss/**/*',
                tasks: ['compass', 'livereload']
            },
            js: {
                files: '<%= theme.assets %>/js/**/*',
                tasks: ['jshint', 'uglify', 'livereload']
            }
        },

        // image optimization
        // imagemin: {
        //     dist: {
        //         options: {
        //             optimizationLevel: 7,
        //             progressive: true
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: '<%= theme.assets %>/images/',
        //             src: '**/*',
        //             dest: '<%= theme.assets %>/images/'
        //         }]
        //     }
        // },

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


    // register task
    grunt.registerTask('default', [
        // 'livereload-start',
        'compass',
        // 'uglify',
        'regarde'
    ]);

};
