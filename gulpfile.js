var gulp         = require('gulp');
var less         = require('gulp-less');
var autoprefixer = require('less-plugin-autoprefix');
var autoprefix   = new autoprefixer({browsers:['last 2 versions']});
var minifyCSS    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var pkgJson      = require('./package.json');

gulp.task('styles', function() {
  return gulp.src('src/less/bundle.less')
    .pipe(less({plugins:[autoprefix]}))
    .pipe(minifyCSS())
    .pipe(rename('azure.min.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['styles']);
