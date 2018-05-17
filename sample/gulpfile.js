var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concat = require('gulp-concat'); //compile js plugins into one file
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var watch = require('gulp-watch'); //sass compile to css
 
gulp.task('sass', function () {
  return gulp.src('html/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('html/assets/css/'));
});
gulp.task('watch', function () {
  gulp.watch('html/assets/scss/**/*.scss', ['sass']);
});

gulp.task('concat', function() {
  return gulp.src(
          [
      'html/assets/bower_components/jquery/dist/jquery.min.js',
      'html/assets/bootstrap/dist/js/bootstrap.bundle.min.js',
      'html/assets/js/jquery-migrate.min.js',
      'html/assets/js/jquery.easing.min.js',
      'html/assets/js/modernizr.custom.97074.js',
      'html/assets/bower_components/flexslider/jquery.flexslider-min.js',
      'html/assets/ytp-player/jquery.mb.YTPlayer.min.js',
      'html/assets/dzsparallaxer/dzsparallaxer.js',
      'html/assets/masonry/masonry.pkgd.min.js',
      'html/assets/masonry/imagesloaded.pkgd.min.js',
      'html/assets/js/jquery.preloader.min.js',
      'html/assets/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
      'html/assets/js/jquery.particleground.min.js'
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('html/assets/js/plugins/'));
});

gulp.task('concatCss', function () {
  return gulp.src([
      
       'html/assets/ionicons/css/ionicons.min.css',
       'html/assets/dzsparallaxer/dzsparallaxer.css',
      'html/assets/bower_components/flexslider/flexslider.css',
      'html/assets/bower_components/magnific-popup/dist/magnific-popup.css',
      'html/assets/ytp-player/jquery.mb.YTPlayer.min.css',
      'html/assets/bootstrap/dist/css/bootstrap.min.css'
  ])
    .pipe(concatCss("plugins/bundle.css"))
    .pipe(gulp.dest('html/assets/css/'));
});