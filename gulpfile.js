var gulp=require('gulp');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
gulp.task('cssmin',function(){
   return gulp.src('css/*.css')
   .pipe(concat('combined.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
});

gulp.task('uglify',function(){
    return gulp.src('js/*.js')
    .pipe(concat('combined.min.js'))
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
    gulp.watch('js/*.js',['uglify'])
    gulp.watch('css/*.css',['cssmin'])
})


gulp.task('default',['watch'])