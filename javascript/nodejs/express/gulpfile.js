var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , browserSync = require('browser-sync')
  ;

gulp.task('default',['browser-sync'], function () {
	
});

gulp.task('browser-sync',['nodemon'],function () {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["views/**/*.*"],
        browser: "google chrome",
        port: 3001,
	});
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script:'meandowlark.js'
	}).on('start', function () {
		if(!started){
			cb();
			started = true;
		}
	});
});