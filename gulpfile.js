// 获取 gulp

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

gulp.task('js',function(){
  gulp.src('src/js/login.js')
     .pipe(uglify())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('dist/'))
});


