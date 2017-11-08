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
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Sass into css
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

// Concatenates all the JS and minifies it using uglify()
gulp.task('scripts', function() {
  return gulp.src('src/*.js')
    .pipe(concat('silk.js'))
    .pipe(gulp.dest('build/'))
    .pipe(rename('silk.min.js'))
    .pipe(uglify().on('error', function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest('dist/js'))
});

// Watch the files for change and build them
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['lint', 'scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
