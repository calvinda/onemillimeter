var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

var paths = {
  cssSource: 'sass/',
  cssOutput: 'css/',
};

gulp.task('watch', function() {
  gulp.watch(paths.cssSource + '**/*.scss', gulp.series('sass'));
});

gulp.task('sass', function() {
  var processors = [autoprefixer({ browsers: ['last 5 version'] })];

  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))

    .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.parallel('watch', 'sass'));
