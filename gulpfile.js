var gulp = require('gulp');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');


gulp.task('uncss', function() {
    return gulp.src('www/styles/theme.css')
      .pipe(uncss({
          html: ['www/index.html']
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  gulp.src('www/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});