var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '//web03/websites/news/';
  var conn = ftp.create({
    host: 'news.kcc.edu',
    user: args.user,
    password: args.password,
    log: gutil.log
  });

  gulp.src(['_site/'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});
