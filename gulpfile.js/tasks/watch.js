var gulp     = require('gulp');
var watch    = require('gulp-watch');
var config   = require('../config');
var html     = require('../config/html');
var styles   = require('../config/styles');
var scripts  = require('../config/scripts');

gulp.task('watch', ['build', 'browserSync'], function() {
  watch(html.watch, function() { gulp.start('html'); });
  watch(styles.watch, function() { gulp.start('styles'); });
  watch(scripts.watch, function() { gulp.start('scripts'); });
});
