const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const livereload= require('gulp-livereload');
const connect = require('gulp-connect');
const cleanCss = require('gulp-clean-css');
const open = require('open');
const imagemin = require('gulp-imagemin');

const day = 'day04x';

gulp.task('js',function(){
    return gulp.src(`./app/${day}/js/*.js`)
    .pipe(concat('concat.js'))
    .pipe(gulp.dest(`./server/${day}/js`))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(`./server/${day}/js`))
    .pipe(livereload());
});

gulp.task('css',function(){
    return gulp.src(`./app/${day}/css/*.css`)
    .pipe(concat('concat.css'))
    .pipe(gulp.dest(`./server/${day}/css`))
    .pipe(cleanCss({compatibility:'ie8'}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(`./server/${day}/css`))
    .pipe(livereload());
});

gulp.task('html',function(){
    return gulp.src(`./app/${day}/index.html`)
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest(`./server/${day}/`))
    .pipe(livereload());
});

gulp.task('server',['default'],function(){
    livereload.listen();
    connect.server({
        root:`./server/${day}/`,
        livereload:true,
        port:8888
    });
    open('http://localhost:8888');
    gulp.watch([`./app/${day}/js/*.js`],['js']);
    gulp.watch([`./app/${day}/css/*.css`],['css']);
    gulp.watch([`./app/${day}/index.html`],['html']);
});

gulp.task('img1',function(){
    return gulp.src(`./app/${day}/img/Animations/**/*.{jpg,png,gif}`)
    .pipe(imagemin())
    .pipe(gulp.dest(`./server/${day}/img/Animations`));
});

gulp.task('img2',function(){
    return gulp.src(`./app/${day}/img/Buttons/**/*.{jpg,png,gif}`)
    .pipe(imagemin())
    .pipe(gulp.dest(`./server/${day}/img/Buttons`));
});


gulp.task('default',['js','css','html','img1','img2']);