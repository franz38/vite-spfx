'use strict';
import gulp from 'gulp'
import stringReplace from 'gulp-string-replace'
import build from '@microsoft/sp-build-web'

build.initialize(gulp);

gulp.task('replace-import-meta', () => {
    return gulp.src(['./lib/**/*.js'])
        .pipe(stringReplace('import.meta', 'process'))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', gulp.series('replace-import-meta'));