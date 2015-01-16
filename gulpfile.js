'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');


var dest = "./build";
var src = './react_components';

var config = {
  confirmationBox: {
    src: src + "/index.js",
    dest: dest
  },
  sample: {
    src: "./sample/sample.jsx",
    dest: "./sample"
  }
};


gulp.task('default', ['confirmationBox', 'sample', 'watch']);


gulp.task('watch', function(){
  bundler.on('update', function(){
    gulp.start('confirmationBox');
  });
  sampleBundler.on('update', function(){
    gulp.start('sample');
  });
});


var bundler = watchify(browserify(config.confirmationBox.src, {
  cache: {},
  packageCache: {},
  fullPaths: true,
  standalone: 'react-confirmation-box',
  debug: true
}));

gulp.task('confirmationBox', function() {
    var browserifyStream = bundler.bundle()
        .pipe(source('react-confirmation-box.js'))
        .pipe(gulp.dest(config.confirmationBox.dest));

    return browserifyStream;
});


var sampleBundler = watchify(browserify(config.sample.src, {
  cache: {},
  packageCache: {},
  fullPaths: true,
  standalone: 'sample',
  debug: true
}));
sampleBundler.transform(reactify);


gulp.task('sample', function(){
  var browserifyStream = sampleBundler.bundle()
    .pipe(source('sample.js'))
    .pipe(gulp.dest(config.sample.dest));

  return browserifyStream;
});
