var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var travisSass = require('gulp-sass');
var cssnano = require('gulp-cssnano');


function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('travisSass', function() { // Compiling of SASS into CSS is handled here:
  return gulp.src(config.travisSass.src)
    .pipe(sourcemaps.init())
    .pipe(travisSass().on('error', travisSass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.travisSass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(cssnano({ zindex: false })) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulp.dest(config.travisSass.dest.jekyllRoot))
    .pipe(gulp.dest(config.travisSass.dest.buildDir));
});
