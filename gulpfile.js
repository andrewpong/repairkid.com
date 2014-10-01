var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.start('minify-js', 'minify-css', 'minify-html');
})

// Concatenate and minify all JS to all.js
gulp.task('minify-js', function() {
  gulp.src([
    'www/scripts/jquery-1.11.1.js', 
    'www/scripts/jquery.plugin.js', 
    'www/scripts/bootstrap.js', 
    'www/scripts/jquery.flexslider.js', 
    'www/scripts/smoothscroll.js', 
    'www/scripts/skrollr.js', 
    'www/scripts/scrollreveal.js', 
    'www/scripts/isotope.js', 
    'www/scripts/scripts.js', 
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});

// Concatenate and minify all CSS to style.css
gulp.task('minify-css', function() {
  return gulp.src([
    'www/styles/bootstrap.css', 
    'www/styles/flexlider.css', 
    'www/styles/lineicons.css', 
    'www/styles/eleganticons.css', 
    'www/styles/fontawesome.css', 
    'www/styles/theme.css'
    ])
    .pipe(concat('all.css'))
    // .pipe(gulp.dest('dist/scripts'))
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
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('dist/styles'));
});

// Minify all html files
gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};

  gulp.src('www/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist'))
});