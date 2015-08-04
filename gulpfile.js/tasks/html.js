var config        = require('../config/html');
var gulp          = require('gulp');
var minifyHTML    = require('gulp-minify-html');
var browserSync   = require('browser-sync');

gulp.task('html', function () {
  return gulp.src(config.src)
    .pipe(minifyHTML())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
