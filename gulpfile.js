var fs = require('fs');
var yargs = require('yargs');
var yaml = require('js-yaml');
var sequence = require('run-sequence');
var gulp = require('gulp');
var browserSync = require('browser-sync');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

// ALL THE CRAP BELLOW IS RUN WHEN YOU RUN `$ gulp` OR `$ gulp --production`

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('build', function(done) { // This runs the following tasks (above): clean (cleans _site/), jekyll-build (jekyll does its thing), SASS and JS tasks (compile them), copy (copies static assets like images to the site build)
  sequence( 'clean', 'jekyll-build', 'sitemap', ['sass', 'contentSass', 'javascript', 'playlistScript'], 'copy', done);
});

gulp.task('travisBuild', function(done) { // This runs the following tasks (above): clean (cleans _site/), jekyll-build (jekyll does its thing), SASS and JS tasks (compile them), copy (copies static assets like images to the site build)

  sequence( 'clean', 'travisJekyllBuild', 'travisSitemap', ['travisSass', 'travisContentSass', 'travisScript', 'travisPlaylistScript'], 'travisCopy', 'travisCopyRss', done);
});

gulp.task('default', function(done) { // Default gulp task (run via 'gulp' in terminal)
  sequence('build', 'browser-sync', 'watch', done); // Runs these things which in turn run other things.
});

gulp.task('watch', function() { // Watch for changes to be piped into browserSync on saving of files:
  gulp.watch(config.watch.pages, ['build', browserSync.reload]); // Watch for new pages and changes.
  gulp.watch(config.watch.javascript, ['javascript', browserSync.reload]); // JS changes
  gulp.watch(config.watch.playlistScript, ['playlistScript', browserSync.reload]); // JS changes
  gulp.watch(config.watch.sass, ['sass']); // SASS/SCSS changes
  gulp.watch(config.watch.sass, ['contentSass']); // SASS/SCSS changes
  gulp.watch(config.watch.images, ['copy', browserSync.reload]); // Watch for new static assets like images
});

gulp.task('travis', function(done) { // Default gulp task (run via 'gulp' in terminal)
  sequence('travisBuild', done); // Runs these things which in turn run other things.
});
