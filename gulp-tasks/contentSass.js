var gulp = require('gulp');
var yargs = require('yargs');
var fs = require('fs');
var yaml = require('js-yaml');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var contentSass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('contentSass', function() { // Compiling of SASS into CSS is handled here:
  return gulp.src(config.contentSass.src)
    .pipe(sourcemaps.init())
    .pipe(contentSass().on('error', contentSass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.contentSass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.contentSass.dest.jekyllRoot))
    .pipe(gulp.dest(config.contentSass.dest.buildDir))
    .pipe(browserSync.stream());
});
