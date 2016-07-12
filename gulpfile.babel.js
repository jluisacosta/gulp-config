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

var config = {
  server: {
    root: 'build',
    port: 8080,
    livereload: true
  },
  views: {
    src: './src/views/index.pug',
    watch: './src/views/**/*.pug',
    dest: './build'
  },
  styles: {
    src: './src/styles/app.styl',
    watch: './src/styles/**/*.styl',
    dest: './build'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: './src/scripts/**/*.js',
    dest: './build/app.js'
  },
  dist: {
    html: {
      src: './build/index.html',
      dest: './dist'
    },
    img: {
      src: './build/img/*',
      dest: './dist/img'
    }
  }
};

gulp.task('server', () => {
  connect.server({
    root: config.server.root,
    port: config.server.port,
    livereload: config.server.livereload
  });
});

gulp.task('build:html', () => {
  gulp.src(config.views.src)
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(connect.reload());
});

gulp.task('build:css', () => {
  gulp.src(config.styles.src)
    .pipe(stylus({
      'inlcude-css': true,
      compress: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(connect.reload());
});

gulp.task('build:js', () => {
  browserify({ debug: true })
    .transform(babelify.configure({
      presets: ["es2015"],
      compact: true,
      minified: true
    }))
    .require(config.scripts.src, {
      entry: true
    })
    .bundle()
    .on("error", (error) => {
      console.log("Error: " + error.message);
    })
    .pipe(filesystem.createWriteStream(config.scripts.dest));
});

gulp.task('livereload', () => {
  gulp.src(config.scripts.watch)
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(config.views.watch, ['build:html']);
  gulp.watch(config.styles.watch, ['build:css']);
  gulp.watch(config.scripts.watch, ['build:js', 'livereload']);
});

gulp.task('build',['build:css', 'build:js', 'build:html']);

gulp.task('default', ['server','watch', 'build']);

gulp.task('dist:html', () => {
  gulp.src(config.dist.html.src)
    .pipe(smoosh())
    .pipe(gulp.dest(config.dist.html.dest));
});

gulp.task('dist:image_opt', () => {
  gulp.src(config.dist.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.dist.img.dest));
});

gulp.task('dist',['dist:html', 'dist:image_opt']);
