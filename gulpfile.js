var less         = require('gulp-less');
var autoprefixer = require('less-plugin-autoprefix');
var minifyCSS    = require('gulp-minify-css');

gulp.task('styles', function() {
  return gulp.src('src/less/panel.less')
    .pipe(less({plugins:[autoprefix]}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('default', ['styles']);
