var gulp =require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc');
var markdown = require('gulp-markdown');
var marked = require('marked');



gulp.task('canvas_jsdoc',function(){
  return gulp.src(['./src/html5/canvas/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    name: 'canvas'
  }))
  .pipe(jsdoc.generator('./dest/html5'))
  //.pipe(jsdoc('./dest'))
});

gulp.task('index_jsdoc',function(){
  return gulp.src(['./src/index.md'])
  .pipe(markdown())
  .pipe(gulp.dest('./dest'))
})

gulp.task('js_jsdoc',function(){
  return gulp.src(['./src/javascript/*.js'])
  .pipe(jsdoc.parser({
    plugins: ['plugins/markdown'],
    markdown:{
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    },
    name: 'javascript'
  }))
  .pipe(jsdoc.generator('./dest'))
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

gulp.task('jsdoc',['canvas_jsdoc','js_jsdoc','index_jsdoc'])