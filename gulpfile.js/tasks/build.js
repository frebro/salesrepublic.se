var gulp          = require('gulp');
var gulpSequence  = require('gulp-sequence');
var config        = require('../config');

gulp.task('build', ['clean'], function(cb) {
  gulpSequence('scripts', 'styles', 'images', cb);
});
