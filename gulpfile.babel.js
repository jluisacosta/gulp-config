import gulp from 'gulp';
import connect from 'gulp-connect';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import babelify from 'babelify';
import filesystem from 'fs';
import smoosh from 'gulp-smoosher';
import imagemin from 'gulp-imagemin';

gulp.task('server', () => {
  connect.server({
    root: 'build',//dist for production
    port: 8080,
    livereload: true
  });
});

gulp.task('build:html', () => {
  gulp.src('./src/views/**/*.pug')
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('build:css', () => {
  gulp.src('./src/styles/**/*.styl')
    .pipe(stylus({
      'inlcude-css': true,
      compress: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('build:js', () => {
  browserify({ debug: true })
    .transform(babelify.configure({
      presets: ["es2015"],
      compact: true,
      minified: true
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

gulp.task('dist:html', () => {
  gulp.src('./build/index.html')
    .pipe(smoosh())
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist:image_opt', () => {
  gulp.src('./build/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('dist',['dist:html', 'dist:image_opt']);
