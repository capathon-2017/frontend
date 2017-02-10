'use strict';

const del = require('del');
const gulp = require('gulp');
const shell = require('gulp-shell');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const sass = require('gulp-sass');

const paths = {
    dist: {
        app: 'dist/app',
        css: 'dist/app/**/*.css',
        html: 'dist/app/**/*.html',
        js: 'dist/app/**/*.js*',
        src: 'dist'
    },
    app: {
        html: 'app/**/*.html',
        scss: 'app/**/*.scss',
        ts: 'app/**/*.ts',
        src: 'app'
    }
};

/* clean */
gulp.task('clean:css', () => {
    return del(paths.dist.css);
});
gulp.task('clean:html', () => {
    return del(paths.dist.html);
})
gulp.task('clean:js', () => {
    return del(paths.dist.js);
});
gulp.task('clean', () => {
    return del(paths.dist.src);
});

/* copy */
gulp.task('copy:html', () => {
    return gulp.src(paths.app.html)
        .pipe(gulp.dest(paths.dist.app));
});
gulp.task('copy', gulp.parallel('copy:html'));

/* transpile */
gulp.task('transpile:scss', () => {
    return gulp.src(paths.app.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.app));
});
gulp.task('transpile:ts', () => {
    return gulp.src(paths.app.ts)
        .pipe(sourcemaps.init())
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});
gulp.task('transpile', gulp.series('transpile:scss', 'transpile:ts'));

/* watch */
gulp.task('watch:html', () => {
    return gulp.watch(paths.app.html, gulp.task('copy:html'));
});
gulp.task('watch:scss', () => {
    return gulp.watch(paths.app.scss, gulp.task('transpile:scss'));
});
gulp.task('watch:ts', () => {
    return gulp.watch(paths.app.ts, gulp.task('transpile:ts'));
});
gulp.task('watch', gulp.parallel('watch:scss', 'watch:ts'));

/* build */
gulp.task('build', gulp.series('clean', 'transpile'));

/* serve */
gulp.task('serve:lite', shell.task([
    'npm start'
]));
gulp.task('serve', gulp.series('build', gulp.parallel('watch', 'serve:lite')));

/* default */
gulp.task('default', gulp.task('serve'));