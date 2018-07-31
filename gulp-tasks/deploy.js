var gulp = require('gulp');
var sequence = require('run-sequence');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function(done) {
  sequence( 'cleanFTP', 'newerFTP', done);
});

gulp.task('cleanFTP', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'Web03.kcc.edu',
    //user: args.user,
    user: args.user,
    //password: args.password,
    parallel: 1,
    password: args.password,
    log: gutil.log
  });
  var globs = [
    '_site/*.html',
    '_site/*.txt',
    '_site/*.xml',
    '_site/*.ico',
    '_site/**/*.*',
    '_site/**/**/*.*',
    '_site/**/**/**/*.*',
    '_site/index.html'
  ];
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
  return gulp.src( globs, { base: './_site/', buffer: false } )
    .pipe( conn.clean( [ '*.html', '*.ico', '*.xml', '*.txt', '**/*.*', '**/**/*.*', '**/**/**/*.*', '/**' ], '_site/', { base: '.' } ) )
    .pipe( conn.dest( remotePath ) );
} );

gulp.task('newerFTP', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'Web03.kcc.edu',
    //user: args.user,
    user: args.user,
    //password: args.password,
    parallel: 1,
    password: args.password,
    log: gutil.log
  });
  var globs = [
    '_site/*.html',
    '_site/*.txt',
    '_site/*.xml',
    '_site/*.ico',
    '_site/**/*.*',
    '_site/**/**/*.*',
    '_site/**/**/**/*.*',
    '_site/index.html'
  ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: './_site/', buffer: false } )
    .pipe( conn.newer( remotePath ) ) // only upload newer files
    .pipe( conn.dest( remotePath ) );
} );
