var gulp = require('gulp');
var pkg = require('./package.json');

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
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


// CSS concat, auto-prefix and minify
gulp.task('styles', styles);

function styles(done) {
    
    var banner = ['/**',
                  ' * <%= pkg.name %>',
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
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('cl.built.css'))
        .pipe(header(banner, { pkg : pkg } ))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./css/'));

  done();
  //console.log('styles ran');
}


// Theme Patches CSS concat, auto-prefix and minify
gulp.task('patchstyles', patchstyles);

function patchstyles(done) {
    
    var banner = ['/**',
                  ' * <%= pkg.name %> - Theme Patches',
                  ' * ',
                  ' * Improves visual compatability with existing',
                  ' * Wordpress themes, like the Department theme.',
                  ' * ',
                  ' * @version v<%= pkg.version %>',
                  ' * @author <%= pkg.authorHuman %>',
                  ' * @license <%= pkg.license %>',
                  ' * @see <%= pkg.docs %>',
                  ' */',
                  '',
                  ''].join('\n');
    
	gulp.src('./src/sass/patches/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(concat('clpatch.built.css'))
        .pipe(header(banner, { pkg : pkg } ))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./css/'));

  done();
  //console.log('styles ran');
}


// JS concat, strip debugging and minify
gulp.task('scripts', scripts);

function scripts(done) {
  gulp.src('./src/js/*.js')
    .pipe(jshint(done))
    .pipe(jshint.reporter('default'));
  gulp.src('./src/js/*.js')
    .pipe(concat('cl.built.js'))
    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
    
	done();
 // console.log('scripts ran');
}

// watch
gulp.task('watcher', watcher);

function watcher(done) {
	
	// watch for Theme CSS changes
	gulp.watch('./src/sass/*.scss', styles);
    
    // watch for Theme Patches CSS changes
	gulp.watch('./src/sass/patches/*.scss', patchstyles);
    
    // watch for Theme JS changes
	gulp.watch('./src/js/*.js', scripts);

	done();
}

gulp.task( 'default',
	gulp.parallel('styles', 'patchstyles', 'scripts', 'watcher', function(done){
		done();
	})
);


function done() {
	console.log('done');
}