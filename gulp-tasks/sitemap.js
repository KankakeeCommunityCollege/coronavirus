var gulp = require('gulp');
var yargs = require('yargs');
var fs = require('fs');
var yaml = require('js-yaml');
var sitemap = require('gulp-sitemap');
var gulpif = require('gulp-if');

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

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
