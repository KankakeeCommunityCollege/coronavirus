var gulp = require('gulp');
var yargs = require('yargs');
var fs = require('fs');
var yaml = require('js-yaml');
var browserSync = require('browser-sync');

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('copyVendor', function() { // 'copy' task is used to copy any assets or items not handled by gulp tasks (e.g. copy everything in assets/img/ into the built site)
  browserSync.notify(config.copyVendor.notification);
  return gulp.src(config.copyVendor.assets)
    .pipe(gulp.dest(config.copyVendor.dist));
});
