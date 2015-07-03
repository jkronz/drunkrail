sassFiles = {
  'css/style.css': 'sass/style.scss'
};
coffeeFiles = {
  'js/main.js': ['coffee/*.coffee']
};
module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compileJoined: {
        options: {
          join: true
        },
        files: coffeeFiles
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: [
            'bower_components/bootstrap-sass-official/assets/stylesheets'
          ]
        },
        files: sassFiles
      },
      dist: {
        options: {
          style: 'compressed',
          loadPath: [
            'bower_components/bootstrap-sass-official/assets/stylesheets'
          ]
        },
        files: sassFiles
      }
    },
    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass:dev']
      },
      coffee: {
        files: 'coffee/*.coffee',
        tasks: ['coffee:compileJoined']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('buildcss', ['sass:dist']);
};