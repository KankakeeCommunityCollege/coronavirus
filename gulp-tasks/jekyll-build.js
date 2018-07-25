var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');
var yaml = require('js-yaml');
var spawn = require('cross-spawn');

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('jekyll-build', function(done) { // Runs the jekyll build
  browserSync.notify(config.jekyll.notification);
  return spawn('jekyll', ['build'], {
    stdio: 'inherit'
  })
    .on('close', done);
});
