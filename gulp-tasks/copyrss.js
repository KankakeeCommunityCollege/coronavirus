var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('copyrss', function() { // 'copy' task is used to copy any assets or items not handled by gulp tasks (e.g. copy everything in assets/img/ into the built site)
  browserSync.notify(config.copyrss.notification);
  return gulp.src(config.copyrss.assets)
    .pipe(rename('rss.xml'))
    .pipe(gulp.dest('./'));
});
