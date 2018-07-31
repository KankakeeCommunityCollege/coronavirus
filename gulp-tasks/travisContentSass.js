var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var travisContentSass = require('gulp-sass');
var cssnano = require('gulp-cssnano');


function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('travisContentSass', function() { // Compiling of SASS into CSS is handled here:
  return gulp.src(config.travisContentSass.src)
    .pipe(sourcemaps.init())
    .pipe(travisContentSass().on('error', travisContentSass.logError)) // errors shown in terminal for when you screw up your SASS
    .pipe(autoprefixer(config.travisContentSass.compatibility)) // Automatically prefix any CSS that is not compatible with the browsers defined in the gulpconfig
    .pipe(cssnano({ zindex: false })) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulp.dest(config.travisContentSass.dest.jekyllRoot))
    .pipe(gulp.dest(config.travisContentSass.dest.buildDir));
});
