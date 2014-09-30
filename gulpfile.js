var gulp = require('gulp');

// Removes unused CSS
var uncss = require('gulp-uncss');

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

// Compresses Javascript
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  gulp.src('www/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});

// Concatenates files
var concat = require('gulp-concat');

gulp.task('concat', function() {
  gulp.src([
    'www/scripts/', 
    './lib/file2.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
});