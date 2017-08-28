var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var copy = require('gulp-copy');

gulp.task('minify-html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
gulp.task('sass', function(){
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		//.pipe(cleanCSS({compatibility: 'ie10'}))
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('vendor', function(){
	return gulp.src('./src/js/**/*.js')
		.pipe(concat('vendor.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});
gulp.task('copy-images', function(){
	return gulp.src('./**.*')
		.pipe(copy('./dist/img/'))
		.pipe(gulp.dest('dist/img'))
});
gulp.task('watch', function() {
  	gulp.watch('./src/**', ['sass', 'vendor', 'minify-html']);
});

gulp.task('default', ['sass', 'vendor', 'minify-html', 'copy-images']);