if (!global.BASE_DIR){
  global.BASE_DIR = __dirname;
}
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var del = require('del');
var gutil = require('gulp-util');

gulp.task('default', ['test']);

gulp.task('test', function(){
  return gulp.src(['test/**/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'list',
      globals: {
        should: require('should'),
        BASE_DIR: __dirname
      }
    }))
    .on('error', gutil.log)
});
