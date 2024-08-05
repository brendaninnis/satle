const gulp          = require('gulp');
const concat        = require('gulp-concat');
const cleanCss      = require('gulp-clean-css');
const uglify        = require('gulp-uglify');
const browsersync   = require('browser-sync').create();
const del           = require('del');

// Concat and minify CSS files
gulp.task('build-css', () => {
    return gulp.src('src/css/*.css')
    .pipe(concat('app.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'));
});

// Concat and minify application specific JS files
gulp.task('build-js', function () {
    return gulp.src(['src/js/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// Clean build directory
gulp.task('clean', () => {
    return del(['build']);
});

gulp.task("session-start", (cb) => {
    return gulp.series('clean', 'build-css', 'build-js')(cb);
});

// Watch for changes in CSS and JS files
gulp.task("server", (done) => {
    browsersync.init({
        server: './build',
        directory: true
    });

    // Watch for file changes
    gulp.watch('./src/css/*.css', gulp.series('session-start'), browsersync.reload);
    gulp.watch('./src/js/*.js', gulp.series('session-start'), browsersync.reload);
});

gulp.task('default', gulp.series('session-start', 'server'));
