var gulp = require('gulp');
var spawn = require('cross-spawn');

gulp.task('travisJekyllBuild', function(done) { // Runs the jekyll build

  var productionEnv = process.env;
  productionEnv.JEKYLL_ENV = 'publish';

  return spawn('jekyll', ['build'], {
    stdio: 'inherit',
    env:productionEnv
  })
    .on('close', done);
});
