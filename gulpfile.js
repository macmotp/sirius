'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');

var sassDir     = './sass';
var targetCSSDir     = './css';
var vueDir     = './vue';
var targetJSDir     = './js';

gulp.task('default', ['sass']);

gulp.task('sass', function () {

    var sassOptions = {outputStyle: 'compressed'};

    return gulp.src(sassDir + '/sirius.sass')
        .pipe(sass(sassOptions).on('error',gutil.log))
        .pipe(autoprefix('last 2 versions', 'ie 9', { cascade: true }))
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify('SASS compiled, prefixed, and minified.'));

});

gulp.task('watch', function () {

    gulp.watch(sassDir + '/**/*.sass', ['sass']);

});