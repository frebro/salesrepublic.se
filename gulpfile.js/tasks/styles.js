var config          = require('../config/styles');
var gulp            = require('gulp');
var changed         = require('gulp-changed');
var postcss         = require('gulp-postcss');
var postcssImport   = require('postcss-import');
var cssnext         = require('cssnext');
var browserSync     = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(postcss([
      postcssImport(),
      cssnext()
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
