var gulp = require('gulp');         //responsible for build process
var gutil = require('gulp-util');   //logging output of build process
var source = require('vinyl-source-stream');   //throw text file from one part of build to another
var browserify = require('browserify');  // figuires out which part of code depends on other part.load order
var watchify = require('watchify'); // automate re-run gulp  when code changes
var reactify = require('reactify');  // in conjuntion with browserify to convert JSX to JS


gulp.task('default', function() {
  // bundler=runs browserify on code base.
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {   // tells bundler to actually do something. Bundler, bundle!
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'browserify Error'))
      // if error during bundle, console log it out
      // for example if cannot find a required file
      .pipe(source('main.js'))
      // after bundled and everything converted to JS and put in right order,
      // put everything in main.js in the current directory
      .pipe(gulp.dest('./'));
  };
  build()   // run build. this runs first when gulp is called from CLI
  bundler.on('update', build)  // if any changes, run build again.

})
