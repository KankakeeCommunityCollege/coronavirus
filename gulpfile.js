var fs = require('fs');
var yargs = require('yargs');
var yaml = require('js-yaml');
var sequence = require('run-sequence');
var del = require('del');
var gulp = require('gulp');
var spawn = require('cross-spawn');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sitemap = require('gulp-sitemap');

// ALL THE CRAP BELLOW IS RUN WHEN YOU RUN `$ gulp` OR `$ gulp --production`

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('clean', function(done) { //cleans _site dir upon execution of gulp command
  del(config.clean);
  done();
});

gulp.task('copy', function() { // 'copy' task is used to copy any assets or items not handled by gulp tasks (e.g. copy everything in assets/img/ into the built site)
  browserSync.notify(config.copy.notification);
  return gulp.src(config.copy.assets)
    .pipe(gulpif(PRODUCTION, imagemin())) // compresses images when gulp --production is run.
    .pipe(gulp.dest(config.copy.dist));
});

gulp.task('sass', function() { // Compiling of SASS into CSS is handled here:
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.sass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.sass.dest.jekyllRoot))
    .pipe(gulp.dest(config.sass.dest.buildDir))
    .pipe(browserSync.stream());
});

gulp.task('javascript', function() {
  browserSync.notify(config.javascript.notification);
  return gulp.src(config.javascript.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.javascript.filename))
    .pipe(gulpif(PRODUCTION, uglify())) // Uglify me captain! (on production builds only)
    .pipe(gulp.dest(config.javascript.dest.jekyllRoot))
    .pipe(gulp.dest(config.javascript.dest.buildDir));
});

gulp.task('jekyll-build', function(done) { // Runs the jekyll build
  browserSync.notify(config.jekyll.notification);
  return spawn('jekyll', ['build'], {
    stdio: 'inherit'
  })
    .on('close', done);
});

gulp.task('build', function(done) { // This runs the following tasks (above): clean (cleans _site/), jekyll-build (jekyll does its thing), SASS and JS tasks (compile them), copy (copies static assets like images to the site build)
  sequence( 'clean', 'jekyll-build', 'sitemap', ['sass', 'javascript'], 'copy', done);
});

gulp.task('sitemap', function () {
  gulp.src((config.sitemap.src), {
    read: false
  })
    .pipe(sitemap({
      siteUrl: (config.sitemap.siteUrl),
    }))
    .pipe(gulpif(PRODUCTION, gulp.dest('./')))
    .pipe(gulpif(PRODUCTION, gulp.dest('./_site')));
});

gulp.task('browser-sync', function() { // BrowserSync ist wunderbar! Changes to HTML, MD, SASS, and JS files get updated on saving of those files
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
});

gulp.task('default', function(done) { // Default gulp task (run via 'gulp' in terminal)
  sequence('build', 'browser-sync', 'watch', done); // Runs these things which in turn run other things.
});

gulp.task('watch', function() { // Watch for changes to be piped into browserSync on saving of files:
  gulp.watch(config.watch.pages, ['build', browserSync.reload]); // Watch for new pages and changes.
  gulp.watch(config.watch.javascript, ['javascript', browserSync.reload]); // JS changes
  gulp.watch(config.watch.sass, ['sass']); // SASS/SCSS changes
  gulp.watch(config.watch.images, ['copy', browserSync.reload]); // Watch for new static assets like images
});
