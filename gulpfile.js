var gulp = require('gulp')
var less = require('gulp-less')
var sourcemaps = require('gulp-sourcemaps')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
var gutil = require('gulp-util')
var notify = require('gulp-notify')
var watch = require('gulp-watch')

var autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] })

var compileLess = function() {
    var plugins = [autoprefix]
    return gulp.src(['./less/part-1.less', './less/part-3.less'])
        .pipe(sourcemaps.init())
        .pipe(less({ plugins: [autoprefix] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
        .pipe(notify('LESS compiled'))
}

gulp.task('default', function() {
    watch('./less/**/*.less', function() {
        gutil.log('Recompiling LESS')
        return compileLess()
    })
    return compileLess()
});
