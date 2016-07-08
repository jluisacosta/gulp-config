import gulp from 'gulp';
import connect from 'gulp-connect';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import babelify from 'babelify';
import filesystem from 'fs';

gulp.task('server', () => {
  connect.server({
    root: 'build',
    port: 3000,
    livereload: true
  });
});

gulp.task('build:html', () => {
  gulp.src('./src/views/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('build:css', () => {
  gulp.src('./src/styles/**/*.styl')
    .pipe(stylus({
      /*'inlcude-css': true,
      import: true,*/
      compress: false
    }))
    .pipe(autoprefixer({
      /*browsers: ['last 2 versions']*/
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('build:js', () => {
  browserify({ debug: true })
    .transform(babelify.configure({
      presets: ["es2015"],
      /*compact: true,
      minified: true*/
    }))
    .require("./src/scripts/app.js", { entry: true })
    .bundle()
    .on("error", (error) => {
      console.log("Error: " + error.message);
    })
    .pipe(filesystem.createWriteStream("./build/js/app.js"));
});

gulp.task('livereload', () => {
  gulp.src('./src/scripts/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch('./src/views/**/*.pug', ['build:html']);
  gulp.watch('./src/styles/**/*.styl', ['build:css']);
  gulp.watch('./src/scripts/**/*.js', ['build:js', 'livereload']);
});

gulp.task('build',['build:css', 'build:js', 'build:html']);

gulp.task('default', ['server','watch', 'build']);
