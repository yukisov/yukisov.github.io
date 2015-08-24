var gulp = require('gulp'),
    _ = require('underscore'),
    plugins = require('gulp-load-plugins')({
      rename: {
        'gulp-minify-css': 'minifyCss'
      }
    }),
    webpack = require('webpack-stream'),
    webpackConf = require('./webpack.config.js')
;

// ------------------
//  Path settings
// ------------------
var paths = {
  // Development where put LESS files, etc
  assets: {
    css: 		'./app/assets/css/',
    less:		'./app/assets/less/',
    js: 		'./app/assets/js/',
    vendor:	'./app/assets/vendor/',
    module: './node_modules/'
  },
  test: {
    js:     './test/'
  },
  // Production where Grunt output the files
  css: 		'./assets/css/',
  js: 		'./assets/js/',
  fonts:  './assets/fonts/'
};

// ------------------
//  tasks of CSS
// ------------------
gulp.task('cssbuild', function() {
  gulp.src(paths.assets.less + 'app.less')
    .pipe(plugins.less({compress:false}))
    .pipe(plugins.pleeease({minifier: false}))
    .pipe(gulp.dest(paths.css))
    .pipe(plugins.rename('app.min.css'))
    .pipe(plugins.minifyCss({
      advanced: false,
      aggressiveMerging: false
    }))
    .pipe(gulp.dest(paths.css))
  ;
});

// ---------------------
//  tasks of JavaScript
// ---------------------

gulp.task('jsbuild', function() {

  gulp.src(paths.assets.js + 'app.js')
    .pipe(webpack(_.extend(webpackConf, {
      output: {
        filename: 'app.js'
      }
    })))
    //.pipe(addsrc.prepend([
    //  paths.assets.vendor + 'pace/pace.min.js'
    //]))
    .pipe(gulp.dest(paths.js))
    // minify
    .pipe(plugins.rename('app.min.js'))
    // 'some': Preserve comments that start with a bang (!) or include a Closure Compiler directive (@preserve, @license, @cc_on)
    .pipe(plugins.uglify({preserveComments:'some'}))
    .pipe(gulp.dest(paths.js))
  ;
});

// --------
//  Watch
// --------
gulp.task('watch', function() {
  gulp.watch([paths.assets.less + '**/*.less', paths.assets.less + '**/*.css'], ['cssbuild']);
  gulp.watch([paths.assets.js + '**/*.js'], ['jsbuild']);
});

gulp.task('default', ['watch']);
