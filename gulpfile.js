var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');

gulp.task("babel", function () {
  return gulp.src("public/javascripts/components/*.jsx")
    .pipe(babel())
    .pipe(gulp.dest("public/javascripts/build"));
});

gulp.task('browserify', function() {
    gulp.src('index.js');
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});