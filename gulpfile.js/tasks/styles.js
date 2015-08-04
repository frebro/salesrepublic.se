var config          = require('../config/styles');
var gulp            = require('gulp');
var postcss         = require('gulp-postcss');
var postcssImport   = require('postcss-import');
var cssnext         = require('cssnext');
var browserSync     = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(postcss([
      postcssImport(),
      cssnext()
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
