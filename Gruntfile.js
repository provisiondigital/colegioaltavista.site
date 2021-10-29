/*
 * Grunt Script for Bootstrap Stylus
 * http://gruntjs.com/
 */

'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

  stylus: {
    compile: {
      options: {
        compress: false,
        spawn: false,
        paths: ['source/stylus']
      },
      files: [
        {
          'css/style.css': [
          'prod/app.styl'
          ]
        }
      ]
    }
  },

  watch: {
    stylus: {
      files: [ 'prod/app.styl' ],
      tasks: ['stylus'],
      options: { spawn: false }
      //tasks: ['stylus', 'autoprefixer', 'cssmin']
    }
    ,
    uglify: {
      files: [ 'prod/app.js'],
      tasks: ['uglify'],
      options: { spawn: false }
    }
  },

  clean: {
    dist: ["css/*.css", "css/*.js"]
  },

  autoprefixer: {
    compile: {
      files: {
        'css/style.css': 'css/style.css'
      },
    },
  },

  cssmin: {
    clean: {
      files: [
        {
          'css/style.css': 'css/style.css'
        }
        ,
        {
          'css/other.css': 'css/other.css'
        },
        {
          'css/other.css': [
          // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/wowjs/css/libs/animate.css',
          'node_modules/swiper/dist/css/swiper.min.css',
          'node_modules/@chenfengyuan/datepicker/dist/datepicker.min.css',
        ]
        }
      ]
    }
  },

  copy: {
    main: {
      files: [
        {expand: true, flatten: true, src: ['node_modules/slick-carousel/slick/fonts/**'], dest: 'css/fonts/', filter: 'isFile'},
        {expand: true, flatten: true, src: ['node_modules/slick-carousel/slick/ajax-loader.gif'], dest: 'css/', filter: 'isFile'},
      ],
    },
  },

  uglify: {
    bower_js_files: {
      files: [
        {
          'js/app.js':'prod/app.js'
        }
        ,
        {
          'js/other.js':[
            'prod/other.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/popper.js/dist/umd/popper.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
          ]
        }
      ]
    }
  },

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('build', ['stylus', 'autoprefixer', 'cssmin', 'uglify']);
  grunt.registerTask('generate', ['autoprefixer', 'cssmin', 'uglify']);

};