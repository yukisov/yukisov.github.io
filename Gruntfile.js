//Gruntfile
module.exports = function(grunt) {

//Initializing the configuration object
grunt.initConfig({

  // Paths variables
  paths: {
    // Development where put LESS files, etc
    assets: {
      css: './app/assets/stylesheets/',
      js: './app/assets/javascripts/',
      vendor: './app/assets/vendor/'
    },
    // Production where Grunt output the files
    css: './assets/css/',
    js: './assets/js/',
    fonts: './assets/fonts/'
  },

  // Task configuration
  concat: {
    options: {
      separator: ';'
    },
    js_frontend: {
      src: [
        '<%= paths.assets.vendor %>stanley/js/hover.zoom.js',
        '<%= paths.assets.vendor %>stanley/js/hover.zoom.conf.js',
        '<%= paths.assets.js %>frontend.js',
      ],
      dest: '<%= paths.js %>frontend.js'
    }
  },
  less: {
    development: {
      options: {
        compress: false
      },
      files: {
        "<%= paths.css %>style.css":"<%= paths.assets.css %>style.less"
      }
    },
    production: {
      options: {
        compress: true
      },
      files: {
        "<%= paths.css %>style.min.css":"<%= paths.assets.css %>style.less"
      }
    }
  },
  uglify: {
    options: {
      mangle: false
    },
    frontend: {
      files: {
        '<%= paths.js %>frontend.min.js': '<%= paths.js %>frontend.js'
      }
    }
  },
  watch: {
    js_frontend: {
      files: [
        '<%= paths.assets.js %>frontend.js'
      ],
      tasks: ['concat:js_frontend', 'uglify:frontend'],
      options: {
        livereload: true
      }
    },
    less: {
      files: ['<%= paths.assets.css %>*.less'],
      tasks: ['less'],
      options: {
        liveload: true
      }
    }
  }
});

// Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

// Task definition
  grunt.registerTask('default', ['watch']);

};
