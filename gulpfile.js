(function () {
  "use strict";

  var gulp = require('gulp');

  var concat = require('gulp-concat');
  var minify = require('gulp-minify-css');
  var uglify = require('gulp-uglify');

  gulp.task('css', function () {
    return gulp.src(
        [
          'src/vendor/css/*',
          'src/css/**/*'
        ]
    )
        .pipe(minify())
        .pipe(concat('gratus.min.css'))
        .pipe(gulp.dest('public/css'));
  });

  gulp.task('js', function () {
    return gulp.src(
        [
          'src/vendor/js/angular.js',
          'src/vendor/js/angular-animate.js',
          'src/vendor/js/angular-messages.js',
          'src/vendor/js/angular-ui-router.js',
          'src/js/**/*'
        ]
    )
        .pipe(uglify())
        .pipe(concat('gratus.min.js'))
        .pipe(gulp.dest('public/js'));
  });

  gulp.task('build', ['css', 'js']);

  gulp.task('default', ['build']);
})();