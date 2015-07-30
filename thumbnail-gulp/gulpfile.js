var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');


gulp.task('default', function() {
  return gulp.src('src/**')         //load the files
    .pipe(react())                  //turn the files from JSX in to JS
    .pipe(concat('application.js')) //join all files in to application.js
    .pipe(gulp.dest('./'))          //save application.js in the current working directory
});
