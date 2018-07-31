var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('travisScript', function() {
  return gulp.src(config.travisScript.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.travisScript.filename))
    .pipe(uglify()) // Uglify me captain! (on production builds only)
    .pipe(gulp.dest(config.travisScript.dest.jekyllRoot))
    .pipe(gulp.dest(config.travisScript.dest.buildDir));
});
