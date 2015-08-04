var gulp     = require('gulp');
var watch    = require('gulp-watch');
var config   = require('../config');
var scripts  = require('../config/scripts');
var styles   = require('../config/styles');

gulp.task('watch', ['build', 'browserSync'], function() {
  watch(scripts.watch, function() { gulp.start('scripts'); });
  watch(styles.watch, function() { gulp.start('styles'); });
});
