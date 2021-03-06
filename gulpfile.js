var gulp = require('gulp')
var elm = require('gulp-elm')

gulp.task('default', function(){

});

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], function(){
    return gulp.src('src/*.elm')
        .pipe(elm())
        .pipe(gulp.dest('dist/'));
});

gulp.task('elm-bundle', ['elm-init'], function(){
    return gulp.src('src/*.elm')
        .pipe(elm.bundle('bundle.js'))
        .pipe(gulp.dest('dist/'));
})