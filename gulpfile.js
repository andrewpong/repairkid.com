var gulp = require('gulp');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');


gulp.task('uncss', function() {
    return gulp.src('www/styles/theme.css')
      .pipe(uncss({
          html: [
          'www/index.html',
          'www/sitemap.html',
          'www/404.html',
          "www/about/index.html",
          "www/contact/index.html",
          "www/privacy/index.html",
          "www/services/index.html",
          "www/terms/index.html"
          ]
      }))
      .pipe(gulp.dest('dist/styles'));
});

gulp.task('compress', function() {
  gulp.src('www/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});