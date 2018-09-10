const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject('tsconfig.json');

// cleans the dist folder
function clean() { 
    return del(['dist/*'])
}

// compiles the typscript project
function compile() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
}

// builds the project after cleaning the dist directory
const build = gulp.series(clean, compile);

// create the tasks
gulp.task('clean', clean);
gulp.task('compile', compile);
gulp.task('build', build);
