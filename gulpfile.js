var fs = require('fs');
var yargs = require('yargs');
var yaml = require('js-yaml');
var sequence = require('run-sequence');
var gulp = require('gulp');
var browserSync = require('browser-sync');

// This Gulp File Uses:
// Modularized Gulp Tasks (found in 'gulp_tasks/')
// And A Gulp Config file (gulpconfig.yml)

// This requires gulp to do all tasks in the glup_tasks/ dir:
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

// Define the --production flag argument for running `$ gulp --production` build to minify/uglify assets
var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

// Load Gulp's config file (gulpconfig.yml)
function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

// Gulp 'build' task that builds the site:
// cleans the _site/ dir, builds the jekyll site, creates the sitemap, compiles Sass and JS, and copies all static assets (i.e. images) into the site
gulp.task('build', function(done) { // This runs the following tasks (above): clean (cleans _site/), jekyll-build (jekyll does its thing), SASS and JS tasks (compile them), copy (copies static assets like images to the site build)
  sequence( 'clean', 'jekyll-build', 'sitemap', ['sass', 'contentSass'], 'copy', done);
});

// Default gulp task that does the following by running `$ gulp`:
// The above Gulp 'build' task, plus starts browser sync and the watch task to watch for changes.
gulp.task('default', function(done) { // Default gulp task (run via 'gulp' in terminal)
  sequence('build', 'browser-sync', 'watch', done); // Runs these things which in turn run other things.
});

// Watch task:
gulp.task('watch', function() { // Watch for changes to be piped into browserSync on saving of files:
  gulp.watch(config.watch.pages, ['build', browserSync.reload]); // Watch for new pages and changes.
  gulp.watch(config.watch.sass, ['sass']); // SASS/SCSS changes
  gulp.watch(config.watch.sass, ['contentSass']); // SASS/SCSS changes
  gulp.watch(config.watch.images, ['copy', browserSync.reload]); // Watch for new static assets like images
});
