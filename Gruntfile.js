module.exports = function(grunt) {

  // Grunt configurations
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Concatenate javascript files so only one request has to be made
      concat: {
          dist: {
            src: ['src/js/jQuery.js',
                  'src/js/bootstrap.js',
                  'src/js/app.js'],
            dest: 'dist/js/production.js'
          }
      },

      // Minify the javascript
      uglify: {
        build: {
          src: 'dist/js/production.js',
          dest: 'dist/js/production.min.js'
        }
      },

      // create filenames for caching
      cacheBust: {
        options: {
          encoding: 'utf8',
          algorithm: 'md5',
          length: 16,
          deleteOriginals: false
        },
        assets: {
          files: [{
            src: ['dist/index.html']
          }]
        }
      },

      // Put a watch on the javascript files so concat & uglify will run
      // if there are any changes made to them
      watch: {
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
            spawn: false
          }
        }
      }

  });

  // Load the Grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cache-bust');

  // Register the Grunt tasks
  grunt.registerTask('default', ['concat', 'uglify', 'cacheBust']);

};
