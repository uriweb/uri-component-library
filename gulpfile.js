var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var header = require('gulp-header');

// options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed' //expanded, nested, compact, compressed
};
var CLSassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed' //expanded, nested, compact, compressed
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


// Playground CSS concat, auto-prefix and minify
gulp.task('styles', styles);

function styles(done) {
    
    var banner = ['/* Playground Styles | Author: Brandon Fuller <bjcfuller@uri.edu> */','',''].join('\n')
    
	gulp.src('./css/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('playground.css'))
        .pipe(header(banner))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./css/'));

  done();
  //console.log('styles ran');
}

// Component Library CSS concat, auto-prefix and minify
gulp.task('CLStyles', CLStyles);

function CLStyles(done) {
    
    var banner = ['/*',
  '===========================================',
  '',
  'COMPONENT LIBRARY',
  '',
  'AUTHOR: BRANDON FULLER <bjcfuller@uri.edu>',
  '',
  'See documentation at uriweb.bitbucket.io',
  '',
  '==============================================',
  '*/',
  '',
  ''].join('\n')
    
	gulp.src('./src/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(CLSassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('cl.built.css'))
        .pipe(header(banner))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./uri-component-library/css/'));

  done();
  //console.log('styles ran');
}


// Component Library Theme Patches CSS concat, auto-prefix and minify
gulp.task('CLPatchStyles', CLPatchStyles);

function CLPatchStyles(done) {
    
    var banner = ['/*',
  '===========================================',
  '',
  'COMPONENT LIBRARY THEME PATCHES',
  '',
  'Improves visual compatability with existing',
  'Wordpress themes, like the Department theme.',
  '',
  'AUTHOR: BRANDON FULLER <bjcfuller@uri.edu>',
  '',
  '==============================================',
  '*/',
  '',
  ''].join('\n')
    
	gulp.src('./src/sass/patches/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(CLSassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('clpatch.built.css'))
        .pipe(header(banner))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./uri-component-library/css/'));

  done();
  //console.log('styles ran');
}


// Component Library JS concat, strip debugging and minify
gulp.task('CLScripts', CLScripts);

function CLScripts(done) {
  gulp.src('./src/js/*.js')
    .pipe(jshint(done))
    .pipe(jshint.reporter('default'));
	gulp.src('./src/js/*.js')
    .pipe(concat('cl.built.js'))
    //.pipe(stripDebug())
    //.pipe(uglify())
    .pipe(gulp.dest('./uri-component-library/js/'));
    
	done();
 // console.log('scripts ran');
}

// watch
gulp.task('watcher', watcher);

function watcher(done) {
	
    // watch for Playground CSS changes
	gulp.watch('./css/**/*.scss', styles);

	// watch for Theme CSS changes
	gulp.watch('./src/sass/*.scss', CLStyles);
    
    // watch for Theme Patches CSS changes
	gulp.watch('./src/sass/patches/*.scss', CLPatchStyles);
    
    // watch for Theme JS changes
	gulp.watch('./src/js/*.js', CLScripts);

	done();
}

gulp.task( 'default',
	gulp.parallel('styles', 'CLStyles', 'CLPatchStyles', 'CLScripts', 'watcher', function(done){
		done();
	})
);


function done() {
	console.log('done');
}