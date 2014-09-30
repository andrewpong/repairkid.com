var gulp = require('gulp');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
    return gulp.src('./www')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
  gulp.src('www/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});