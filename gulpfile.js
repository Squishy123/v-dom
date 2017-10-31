// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Lint Task - checks for js errors
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Sass into css
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

// Concatenates all the JS and minifies it using uglify()
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// Watch the files for change and build them
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['lint', 'scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
