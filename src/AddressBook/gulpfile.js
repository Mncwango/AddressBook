/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var libs = './wwwroot/node_packages/';
gulp.task('default', function () {
    // place code for your default task here
});


gulp.task('restore:core-js', function () {
    gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('restore:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('restore:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});

gulp.task('restore:jquery', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.js'
    ]).pipe(gulp.dest(libs + 'jquery'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('restore:@angular', function () {
    gulp.src([
        'node_modules/@angular/common/**/*.*',
        'node_modules/@angular/compiler/**/*.*',
        'node_modules/@angular/core/**/*.*',
        'node_modules/@angular/forms/**/*.*',
        'node_modules/@angular/http/**/*.*',
        'node_modules/@angular/platform-browser/**/*.*',
        'node_modules/@angular/platform-browser-dynamic/**/*.*',
        'node_modules/@angular/router/**/*.*',
        'node_modules/@angular/upgrade/**/*.*',

    ], {base:'node_modules/'}).pipe(gulp.dest(libs));
});

//gulp.task('restore:angular', function () {
//    gulp.src([
//        'node_modules/@angular/**/*.js'
//    ]).pipe(gulp.dest(libs + '@angular'));
//});

gulp.task('restore:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});


gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:jquery',
    'restore:bootstrap',
    'restore:@angular',
    'restore:rxjs'

]);