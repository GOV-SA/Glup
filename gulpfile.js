var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var styleSass = "./scss-en/govsa-ds-en.scss";
var styleSassar = "./scss-ar/govsa-ds-ar.scss";
var styleCss = "./css/en";
var styleCssar = "./css/ar";
var stylewatch = './scss/**/*.scss';

gulp.task("style", function() {
  gulp.src(styleSass)
      .pipe(
      sass({
        errorLogToConsole: true,
      })
    ).on("error", console.error.bind(console))
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(styleCss));
});

gulp.task("styleMin", function() {
  gulp.src(styleSass)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      })
    ).on("error", console.error.bind(console))
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(styleCss));
});


gulp.task("style-ar", function() {
  gulp.src(styleSassar)
      .pipe(
      sass({
        errorLogToConsole: true,
      })
    ).on("error", console.error.bind(console))
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(styleCssar));
});

gulp.task("styleMin-ar", function() {
  gulp.src(styleSassar)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      })
    ).on("error", console.error.bind(console))
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(styleCssar));
});


gulp.task('init', gulp.series(gulp.parallel('style', 'styleMin', 'style-ar', 'styleMin-ar')));

gulp.task('watch', function() {
gulp.watch(stylewatch , gulp.parallel('style', 'styleMin', 'style-ar', 'styleMin-ar'));
});