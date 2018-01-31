var gulp = require('gulp');
var pkg = require('./package.json');

// include plug-ins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var header = require('gulp-header');

// options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed' //expanded, nested, compact, compressed
};


// CSS concat, auto-prefix and minify
gulp.task('styles', styles);

function styles(done) {
    
    var banner = ['/**',
                  ' * <%= pkg.name %>',
                  ' * ',
                  ' * --styles--',
                  ' * ',
                  ' * @version v<%= pkg.version %>',
                  ' * @author <%= pkg.authorHuman %>',
                  ' * @license <%= pkg.license %>',
                  ' * @see <%= pkg.docs %>',
                  ' */',
                  '',
                  ''].join('\n');
    
	gulp.src('./src/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(concat('cl.built.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(header(banner, { pkg : pkg } ))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./css/'));

  done();
  //console.log('styles ran');
}


// JS concat, strip debugging and minify
gulp.task('scripts', scripts);

function scripts(done) {
    
  var banner = ['/**',
                  ' * <%= pkg.name %>',
                  ' * ',
                  ' * --scripts--',
                  ' * ',
                  ' * @version v<%= pkg.version %>',
                  ' * @author <%= pkg.authorHuman %>',
                  ' * @license <%= pkg.license %>',
                  ' * @see <%= pkg.docs %>',
                  ' */',
                  '',
                  ''].join('\n');
    
    gulp.src('./src/js/*.js')
        .pipe(jshint(done))
        .pipe(jshint.reporter('default'));
  
    gulp.src('./src/js/*.js')
        .pipe(concat('cl.built.js'))
        //.pipe(stripDebug())
        .pipe(uglify())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./js/'));
    
	done();
 // console.log('scripts ran');
}

// watch
gulp.task('watcher', watcher);

function watcher(done) {
	
	// watch for Theme CSS changes
	gulp.watch('./src/sass/*.scss', styles);
    
    // watch for Theme JS changes
	gulp.watch('./src/js/*.js', scripts);

	done();
}

gulp.task( 'default',
	gulp.parallel('styles', 'scripts', 'watcher', function(done){
		done();
	})
);


function done() {
	console.log('done');
}