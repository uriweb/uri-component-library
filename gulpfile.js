var gulp = require('gulp');
var pkg = require('./package.json');

// include plug-ins
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');
//var stripDebug = require('gulp-strip-debug');
var terser = require('gulp-terser');
var replace = require('gulp-replace-task');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var header = require('gulp-header');
var shell = require('gulp-shell');

// options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed' //expanded, nested, compact, compressed
};


function styles(done) {

    var banner = ['/**',
                  ' * <%= pkg.name %>',
                  ' * ',
                  ' * --styles--',
                  ' * ',
                  ' * @version v<%= pkg.version %>',
                  ' * @author <%= pkg.humans[0] %>',
				  ' * @author <%= pkg.humans[1] %>',
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
// CSS concat, auto-prefix and minify
gulp.task('styles', styles);


function scripts(done) {

  var banner = ['/**',
                  ' * <%= pkg.name %>',
                  ' * ',
                  ' * --scripts--',
                  ' * ',
                  ' * @version v<%= pkg.version %>',
                  ' * @author <%= pkg.humans[0] %>',
                  ' * @author <%= pkg.humans[1] %>',
                  ' * @license <%= pkg.license %>',
                  ' * @see <%= pkg.docs %>',
                  ' */',
                  '',
                  ''].join('\n');

	// Run JSHint for src js
    gulp.src('./src/js/*.js')
        .pipe(jshint(done))
        .pipe(jshint.reporter('default'));

	// Run JSHint for wysiwyg js
	gulp.src('./js/wysiwyg/*.js')
        .pipe(jshint(done))
        .pipe(jshint.reporter('default'));

	// Run jscs for src js
    gulp.src('./src/js/*.js')
        .pipe(jscs(done))
        .pipe(jscs.reporter());

	// Run jscs for wysiwyg js
	gulp.src('./js/wysiwyg/*.js')
        .pipe(jscs(done))
        .pipe(jscs.reporter());

	// Compile src js
    gulp.src('./src/js/*.js')
        .pipe(concat('cl.built.js'))
        //.pipe(stripDebug())
        .pipe(terser())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./js/'));

	done();
 // console.log('scripts ran');
}
// JS concat, strip debugging and minify
gulp.task('scripts', scripts);



function sniffs(done) {

    return gulp.src('.', {read:false})
        .pipe(shell(['./.sniff']));

}
// run codesniffer
gulp.task('sniffs', sniffs);


function webpack(done) {

    return gulp.src('.', {read:false})
        .pipe(shell(['npx webpack']));

}
// run webpack
gulp.task('webpack', webpack);


function version(done) {

	gulp.src('./uri-component-library.php')
		.pipe(replace({
			patterns: [{
				match: /Version:\s([^\n\r]*)/,
				replace: 'Version: ' + pkg.version
			}]
		}))
		.pipe(gulp.dest('./'));

}
// Update plugin version
gulp.task('version', version);


function watcher(done) {

	// watch for CSS changes
	gulp.watch('./src/sass/*.scss', styles);

  // watch for JS changes
	gulp.watch('./src/js/*.js', scripts);
	gulp.watch('./js/wysiwyg/*.js', scripts);
  gulp.watch('./src/js/blocks/', webpack);

	// watch for PHP change
	gulp.watch('./**/*.php', sniffs);

	done();
}
// watch
gulp.task('watcher', watcher);


gulp.task( 'default',
	gulp.parallel('styles', 'scripts', 'sniffs', 'webpack', 'version', 'watcher', function(done){
		done();
	})
);


function done() {
	console.log('done');
}
