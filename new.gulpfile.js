const { series, parallel, watch } = require('gulp');
const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const yaml = require('js-yaml');
const spawn = require('cross-spawn');
const yargs = require('yargs');
const sitemap = require('gulp-sitemap');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const config = require('./gulp-tasks/loadGulpConfig'); // require 

function clean(done) {
  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/


  // Clean stuff
  del(config.clean);
  done();
}

function jekyllBuild(done) {
  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/



  browserSync.notify(config.jekyll.notification);
  return spawn('jekyll', ['build'], {
    stdio: 'inherit'
  })
  .on('close', done);
}

function gulpSitemap(done) {
  const PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

  /*
  function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;  */



  gulp.src((config.sitemap.src), {
    read: false
  })
    .pipe(sitemap({
      siteUrl: (config.sitemap.siteUrl),
    }))
    .pipe(gulpif(PRODUCTION, gulp.dest('./')))
    .pipe(gulpif(PRODUCTION, gulp.dest('./_site')));
  done();
}

function mainScss() {
  const PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/



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

function cmsScss() {
  const PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

  /*
  function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;  */



  return gulp.src(config.cmsScss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.cmsScss.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.cmsScss.dest.jekyllRoot))
    .pipe(gulp.dest(config.cmsScss.dest.buildDir))
    .pipe(browserSync.stream());
}

function copy() {
  const PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/



  browserSync.notify(config.copy.notification);
  return gulp.src(config.copy.assets)
    .pipe(gulpif(PRODUCTION, imagemin())) // compresses images when gulp --production is run.
    .pipe(gulp.dest(config.copy.dist));
}

function browserSyncInit(done) {
  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/



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

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  /*
function loadConfig() {
    const ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
    return yaml.load(ymlFile);
  }
  const config = loadConfig();
  module.exports = config;*/



  watch(
    config.watch.pages,
    series(
      build,
      browserSyncReload
    )
  ); // Watch for new pages and changes.

  watch(
    config.watch.sass,
    mainScss
  ); // SASS/SCSS changes

  watch(
    config.watch.sass,
    cmsScss
  ); // SASS/SCSS changes
  watch(
    config.watch.images,
    series(
      copy,
      browserSyncReload // Watch for new static assets like images
    )
  );
}

// More complex tasks go like this:
const build = series(
  clean,
  jekyllBuild,
  parallel(
    gulpSitemap,
    mainScss,
    cmsScss,
    copy
  ),
);

exports.build = build;
//uncommenting these would make it so you can call `$ gulp watch` or `$ gulp browserSync` from terminal:
//exports.browserSync = browserSync;
//exports.watchFiles = watchFiles;

exports.default = series(
  build,
  parallel(
    browserSyncInit,
    watchFiles
  )
);
