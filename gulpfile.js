var gulp = require('gulp'),
     connect = require('gulp-connect'),
     historyApiFallback = require('connect-history-api-fallback'),
     jshint = require('gulp-jshint'),
     stylish = require('jshint-stylish'),
     inject = require('gulp-inject'),
     wiredep = require('wiredep').stream;

gulp.task('server', function(){
  connect.server({
    root: './src',
    hostname: '0.0.0.0',
    port: '3020',
    liverelaod: true,
    middleware: function (connect, opt) {
      return [ historyApiFallback({}) ];
    }
  });
});

 gulp.task('html', function(){
   gulp.src(['./src/index.html', './src/**/*.html'])
   .pipe(connect.reload());
 });

 gulp.task('css', function(){
   gulp.src(['./src/**/*.css'])
   .pipe(connect.reload());
 });

 gulp.task('jshint', function(){
   return gulp.src(['./src/js/**/*.js'])
       .pipe(jshint('.jshintrc'))
       .pipe(jshint.reporter('jshint-stylish'))
       .pipe(jshint.reporter('fail'));
 });

 gulp.task('js', function(){
  gulp.src(['./src/**/*.js'])
  .pipe(connect.reload());
 });

 gulp.task('inject', function(){
   var sources = gulp.src(['./src/css/**/*.css', './src/js/controllers/*.js', './src/js/services/*.js']);
   return gulp.src('index.html', {cwd:'./src'})
   .pipe(inject(sources, {
     ignorePath: '/src'
   }))
   .pipe(gulp.dest('./src'));
 });

 gulp.task('wiredep', function(){
   return gulp.src('./src/index.html')
   .pipe(wiredep({
     directory: './src/lib',
     devDependencies: true
   }))
   .pipe(gulp.dest('./src'))
 });

 gulp.task('watch', function(){
   gulp.watch(['./src/**/*.html'], ['html']);
   gulp.watch(['./src/**/*.css'], ['css', 'inject']);
   gulp.watch(['./src/js/**/*.js', './src/gulpfile.js'], ['js', 'jshint', 'inject']);
   gulp.watch(['./bower.json'], ['wiredep']);
 });

 gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);