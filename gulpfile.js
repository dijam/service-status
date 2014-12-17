var gulp = require('gulp'),
    exec = require('child_process').exec;

gulp.task('install', function(cb) {
    console.log('Install npm modules');
    exec('npm install', function (err) {
        if (err) return cb(err);

        console.log('Install bower modules');
        exec('bower install', function (err) {
            if (err) return cb(err);
            cb();
        });
    });
});

gulp.task('run', ['install'], function(cb) {
    console.log('Running server');
    exec('node main.js', function (err) {
        if (err) return cb(err);
            cb();
    });
});

gulp.task('default', ['install', 'run']);
