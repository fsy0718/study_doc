var gulp =require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc');
var markdown = require('gulp-markdown');
var marked = require('marked');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');



gulp.task('canvas_jsdoc',function(){
  return gulp.src(['./src/html5/canvas/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    name: 'canvas'
  }))
  .pipe(jsdoc.generator('./dest/html5',null,{
    'private': true,
    monospaceLinks: true,
    cleverLinks: true,
    outputSourceFiles: true
  }))
  //.pipe(jsdoc('./dest'))
});

gulp.task('css3_jsdoc',function(){
  return gulp.src(['./src/css3/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown']
  }))
  .pipe(jsdoc.generator('./dest/css3',null,{
    'private': true,
    monospaceLinks: true,
    cleverLinks: true,
    outputSourceFiles: true
  }))
  //.pipe(jsdoc('./dest'))
});

gulp.task('index_jsdoc',function(){
  return gulp.src(['./src/*.html'])
  .pipe(gulp.dest('./dest'))
})

gulp.task('node_jsdoc',function(){
  return gulp.src(['./src/node/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    name: 'node'
  }))
  .pipe(jsdoc.generator('./dest',null,{
    'private': true,
    monospaceLinks: true,
    cleverLinks: true,
    outputSourceFiles: true
  }))
  //.pipe(gulp.dest('./dest'))
})

gulp.task('css_jsdoc',function(){
  return gulp.src(['./src/css/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    name: 'css'
  }))
  .pipe(jsdoc.generator('./dest',null,{
    'private': true,
    monospaceLinks: true,
    cleverLinks: true,
    outputSourceFiles: true
  }))
  //.pipe(gulp.dest('./dest'))
})

gulp.task('js_jsdoc',function(){
  return gulp.src(['./src/javascript/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    name: 'javascript'
  }))
  .pipe(jsdoc.generator('./dest',null,{
    'private': true,
    monospaceLinks: true,
    cleverLinks: true,
    outputSourceFiles: true
  }))
})

gulp.task('imgmin',function(){
  return gulp.src('src/image/*.{png,jpg,gif,ico}')
  .pipe(cache(imagemin({
    progressive:true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
  .pipe(gulp.dest('dest/image'))
})

gulp.task('mddoc',function(){
  return gulp.src('./src/*.js')
  .pipe(gulpJsdoc2md())
  .on('error',function(err){
    gutil.log(gutil.colors.red('jsdoc2md failed'),err.message)
  })
  .pipe(rename(function(path){
    path.extname = '.md';
  }))
  .pipe(gulp.dest('md'))
})

gulp.task('sass_example',function(){
  return gulp.src('./example/_css/scss/*.scss')
    .pipe(sass({
      errorLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./example/_css'))
})

gulp.task('jsdoc',['canvas_jsdoc','js_jsdoc','index_jsdoc','css3_jsdoc','css_jsdoc','node_jsdoc'])

gulp.task('doc',['jsdoc','imgmin'])

gulp.task('browser-sync',function(){
  browserSync({
    files: '**',
    server: {
      baseDir: './'
    }
  })
})