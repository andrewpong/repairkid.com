var gulp = require('gulp');
var ignore = require('gulp-ignore');
var rimraf = require('gulp-rimraf');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  gulp.start('copy-fonts', 'copy-modernizr', 'minify-js', 'minify-css', 'minify-html', 'minify-img');
})

gulp.task('clean', function () {
  return gulp.src('dist', { read: false }) // much faster
    .pipe(rimraf());
});

gulp.task('copy-fonts', function(){
  gulp.src('www/fonts')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-modernizr', function(){
  gulp.src('www/scripts/modernizr.js')
    .pipe(gulp.dest('dist/scripts'));
});

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
    'www/styles/line-icons.css', 
    'www/styles/elegant-icons.css', 
    'www/styles/font-awesome.css', 
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
    var opts = {comments:false,spare:true};

  gulp.src('www/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-img', function () {
    return gulp.src('www/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
});