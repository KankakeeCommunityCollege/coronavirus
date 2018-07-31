var gulp = require('gulp');
var yargs = require('yargs');
var fs = require('fs');
var yaml = require('js-yaml');
var travisSitemap = require('gulp-sitemap');
var gulpif = require('gulp-if');


function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('travisSitemap', function () {
  gulp.src((config.travisSitemap.src), {
    read: false
  })
    .pipe(travisSitemap({
      siteUrl: (config.travisSitemap.siteUrl),
    }))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./_site'));
});
