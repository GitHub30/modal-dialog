var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('html', () => {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('styles', () => {
    gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/styles/'));
});

gulp.task('scripts', () => {
    return browserify({
        entries: 'src/scripts/core.js'
    }, {debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', () => {
    gulp.src('src/images/favicon.ico')
        .pipe(gulp.dest('dist/'));
    gulp.src('src/images/**/*.svg')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['html', 'styles', 'scripts', 'images'], () => {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*.svg', ['images']);
});