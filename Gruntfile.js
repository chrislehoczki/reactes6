module.exports = function(grunt) { //this is wrapper function that is exported
  // Do grunt-related things in here

  // Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

      //UGLIFY
      uglify: {
        options: {
           banner: '/*! GruntBuild -  - ' + //THIS WILL ADD DATA TO HEADER
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        my_target: {
          files: {
            'public/js/scripts.js': ['src/js/scripts.js']
          }
        }
      },

        //REMOVELOGGING
    removelogging: {
    dist: {
      files: [{
        expand: true,
        src: ['scripts.js'],
        cwd: 'src/js',
        dest: 'public/js'
      }]
    }

    },

      //BROWSERIFY
     browserify: {
      dev: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]],
          watch : true, // use watchify for incremental builds!
          //keepAlive : true, // watchify will exit unless task is kept alive
          browserifyOptions : {
            debug : true // source mapping
          }
   
        },        
        src: ['app/components/handler.js'],
        dest: 'public/js/scripts.js',
      }
    },

  babel: {
        options: {
        sourceMap: true,
        presets: ['es2015']
    },
    dist: {
        files: [
            {
                expand: true,
                cwd: 'app/components',
                src: ['*.js'],
                dest: 'app/components/server/'
            }
        ]
    }

  },
    

  //SASS
  sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'public/css/styles.css': 'src/sass/main.scss'
            }
        } 
    },

    //COMMENTS


  //WATCH
  watch: {
      /*js: {
        files: ['app/components/*.js'], //watches for changes in these files - if finds - runs task
        tasks: ['browserify']
      },*/
      css: {
            files: ['src/sass/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        },
        /*
      js: {
            files: ['app/components/*.js'],
            tasks: ['babel'],

      }
      */
    }




    });




grunt.loadNpmTasks('grunt-babel');

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-remove-logging');
grunt.loadNpmTasks('grunt-contrib-uglify'); 
grunt.loadNpmTasks('grunt-stripcomments');

grunt.registerTask('default', ['browserify:dev', "watch"]); // Default grunt tasks maps to grunt



};


