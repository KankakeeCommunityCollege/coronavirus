var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');
var imagemin = require('gulp-imagemin');

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('travisCopy', function() { // 'travisCopy' task is used to copy any assets or items not handled by gulp tasks (e.g. copy everything in assets/img/ into the built site)
  return gulp.src(config.travisCopy.assets)
    .pipe(imagemin()) // compresses images when gulp --production is run.
    .pipe(gulp.dest(config.travisCopy.dist));
});
