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

gulp.task('travisPlaylistScript', function() {
  return gulp.src(config.travisPlaylistScript.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.travisPlaylistScript.filename))
    .pipe(uglify()) // Uglify me captain! (on production builds only)
    .pipe(gulp.dest(config.travisPlaylistScript.dest.jekyllRoot))
    .pipe(gulp.dest(config.travisPlaylistScript.dest.buildDir));
});
