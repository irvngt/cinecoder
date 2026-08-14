import gulp from 'gulp';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import jsmin from 'gulp-jsmin';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import wpPot from 'gulp-wp-pot';
import sort from 'gulp-sort';

const bs = browserSync.create();

const reloadFiles = [
  './script.js',
  './style.css',
  './**/*.php'
];

const proxyOptions = {
  proxy: 'wocker.test/',
  notify: false
};

const imageminOptions = {
  progressive: true,
  optimizationLevel: 7,
  interlaced: true,
  svgoPlugins: [{ removeViewBox: false }]
};

const wpPotOptions = {
  domain: 'cinecoder',
  package: 'cinecoder',
  lastTranslator: 'Irving Mendoza <irving@webdesignrs.com>'
};

const potFile = './languages/en_US.pot';

export function server(done) {
  bs.init({ ...proxyOptions, files: reloadFiles });
  done();
}

export function css() {
  return gulp
    .src('./css/style.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./css/'))
    .pipe(gulp.dest('./'))
    .pipe(bs.stream());
}

export function js() {
  return browserify('./js/index.js')
    .transform(babelify)
    .bundle()
    .on('error', err => console.log(err.message))
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./js/'))
    .pipe(jsmin())
    .pipe(gulp.dest('./'))
    .pipe(bs.stream());
}

export function img() {
  return gulp.src('./img/raw/**/*.{png,jpg,jpeg,gif,svg}').pipe(imagemin(imageminOptions)).pipe(gulp.dest('./img'));
}

export function webpImages() {
  return gulp.src('./img/raw/**/*.{png,jpg,jpeg}')
    .pipe(webp({ quality: 75 }))
    .pipe(gulp.dest('./img'));
}

export function translate() {
  return gulp.src('./**/*.php').pipe(sort()).pipe(wpPot(wpPotOptions)).pipe(gulp.dest(potFile));
}

export function watchFiles() {
  gulp.watch('./css/**/*.+(scss|css)', css);
  gulp.watch('./js/**/*.js', js);
}

export const build = gulp.series(gulp.parallel(css, js, img, webpImages, translate));
export const watch = gulp.series(build, gulp.parallel(server, watchFiles));
export default watch;
