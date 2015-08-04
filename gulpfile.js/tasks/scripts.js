var config        = require('../config/scripts');
var gulp          = require('gulp');
var changed       = require('gulp-changed');
var uglify        = require('gulp-uglify');
var browserSync   = require('browser-sync');

gulp.task('scripts', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
