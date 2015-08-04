var config        = require('../config/html');
var gulp          = require('gulp');
var changed       = require('gulp-changed');
var minifyHTML    = require('gulp-minify-html');
var browserSync   = require('browser-sync');

gulp.task('html', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(minifyHTML())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
