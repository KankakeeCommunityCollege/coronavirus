const fs = require('fs');
const yargs = require('yargs');
const yaml = require('js-yaml');
const del = require('del');
const browserSync = require('browser-sync');
const sitemap = require('gulp-sitemap');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

//const requireDir = require('require-dir');
//requireDir('./gulp-tasks');

const PRODUCTION = !!(yargs.argv.production);

const { series, parallel } = require('gulp');

function loadConfig() {
  const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
const config = loadConfig();
module.exports = config;

//Delete the _site dir
function clean(cb) {
  del(config.clean);
  cb();
}

// run jekyll's build command
function jekyllBuild(done) {
  browserSync.notify(config.jekyll.notification);
  return spawn('jekyll', ['build'], {
    stdio: 'inherit'
  })
    .on('close', done);
}

// create the sitemap.xml
function sitemap() {
  gulp.src((config.sitemap.src), {
    read: false
  })
  .pipe(sitemap({
    siteUrl: (config.sitemap.siteUrl),
  }))
  .pipe(gulpif(PRODUCTION, gulp.dest('./')))
  .pipe(gulpif(PRODUCTION, gulp.dest('./_site')));
}

function mainSass() {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.sass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.sass.dest.jekyllRoot))
    .pipe(gulp.dest(config.sass.dest.buildDir))
    .pipe(browserSync.stream());
}

function cmsSass() { // compiles stylesheet used for custom CloudCannon options
  return gulp.src(config.contentSass.src)
    .pipe(sourcemaps.init())
    .pipe(contentSass().on('error', contentSass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.contentSass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.contentSass.dest.jekyllRoot))
    .pipe(gulp.dest(config.contentSass.dest.buildDir))
    .pipe(browserSync.stream());
}

function copy() {
  browserSync.notify(config.copy.notification);
  return gulp.src(config.copy.assets)
    .pipe(gulpif(PRODUCTION, imagemin())) // compresses images when gulp --production is run.
    .pipe(gulp.dest(config.copy.dist));
}

function browserSync(done) {
  browserSync.init({
    notify: config.browsersync.notify,
    open: config.browsersync.open,
    port: config.browsersync.port,
    server: {
      baseDir: config.browsersync.server.basedir
    },
    xip: config.browsersync.xip,
    browser: config.browsersync.browser
  });
  done();
}

function watch() {
  gulp.watch(config.watch.pages, ['build', browserSync.reload]); // Watch for new pages and changes.
  gulp.watch(config.watch.sass, ['sass']); // SASS/SCSS changes
  gulp.watch(config.watch.sass, ['contentSass']); // SASS/SCSS changes
  gulp.watch(config.watch.images, ['copy', browserSync.reload]); // Watch for new static assets like images
}

// export tasks
exports.default = build;
exports.clean = clean;
exports.jekyllBuild = jekyllBuild;
exports.mainSass = mainSass;
exports.cmsSass = cmsSass;
exports.copy = copy;
exports.watch = watch;

exports.build = series(
  clean,
  jekyllBuild,
  parallel(
    sitemap,
    mainSass,
    cmsSass,
    copy
  ),
  browserSync,
  watch
);
