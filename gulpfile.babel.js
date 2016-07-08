import gulp from 'gulp';
import connect from 'gulp-connect';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';

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
      'inlcude-css': true,
      compress: false
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch('./src/views/**/*.pug', ['build:html']);
  gulp.watch('./src/styles/**/*.styl', ['build:css']);
});

gulp.task('build',['build:html', 'build:css']);

gulp.task('default', ['build', 'server','watch']);
