var gulp = require('gulp')
  , rename = require('gulp-rename')
// CSS
  , less = require('gulp-less')
  , autoprefixer = require('gulp-pleeease')
  , minifyCss = require('gulp-minify-css')
// JavaScript
  , eslint = require('gulp-eslint')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
// Others
  // Comparing the last time modifying  source file and destination file
  , changed = require('gulp-changed')
  , webpack = require('webpack-stream')
  , webpackConf = require('./webpack.config.js')
  , notify = require('gulp-notify')
  , watch = require('gulp-watch')
  , mocha = require('gulp-mocha')
  , util = require('gulp-util')
  , open = require('gulp-open')
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
    .pipe(less({compress:false}))
    .pipe(autoprefixer({minifier: false}))
    .pipe(gulp.dest(paths.css))
    .pipe(rename('app.min.css'))
    .pipe(minifyCss({
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
    .pipe(eslint())
    .pipe(webpack(webpackConf))
    //.pipe(addsrc.prepend([
    //  paths.assets.vendor + 'pace/pace.min.js'
    //]))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.js))
    // minify
    .pipe(rename('app.min.js'))
    // 'some': Preserve comments that start with a bang (!) or include a Closure Compiler directive (@preserve, @license, @cc_on)
    .pipe(uglify({preserveComments:'some'}))
    .pipe(gulp.dest(paths.js))

});

// --------
//  Watch
// --------
gulp.task('watch', function() {
  gulp.watch([paths.assets.less + '**/*.less', paths.assets.less + '**/*.css'], ['cssbuild']);
  gulp.watch([paths.assets.js + '**/*.js'], ['jsbuild']);
});

gulp.task('default', ['watch']);
