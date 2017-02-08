'use strict';

const gulp      = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    cleancss    = require('gulp-clean-css'),
    pump        = require('pump');

/*
minify Js files
*/
gulp.task('site:uglify', (cb) => {
    pump([
        gulp.src([
            'bower_components/angular/angular.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-material/angular-material.min.js',
			'bower_components/ng-file-upload/ng-file-upload-shim.min.js',
			'bower_components/ng-file-upload/ng-file-upload.min.js',
			'bower_components/ng-img-crop/compile/minified/ng-img-crop.js'
        ]),
        concat('site.min.js'),
        uglify(),
        gulp.dest('js')
    ],cb);
});

/*
* This task will minify all the css files
*/
gulp.task('app:cssmin', () => {
    gulp.src([
        'bower_components/angular-material/angular-material.min.css',
        'bower_components/ng-img-crop/compile/minified/ng-img-crop.css'
    ])
    .pipe(concat('site.min.css'))
    .pipe(cleancss({compatibility: 'ie8', processImport: false}))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', [
    'site:uglify',
    'app:cssmin',
], function() {
    console.log("gulp all tasks finished");
});    