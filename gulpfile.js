var gulp = require('gulp');
var pkg = require('./package.json');

// include plug-ins
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var terser = require('gulp-terser');
var replace = require('gulp-replace-task');
var sass = require('gulp-sass')(require('sass'));
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

// watch
const watchCSS = () => gulp.watch('./src/sass/*.scss', styles);
const watchJS = () => gulp.watch('./src/js/*.js', scripts);
const watchWYSIWYGJS = () => gulp.watch('./js/wysiwyg/*.js', wysiwyg);
const watchBlocksJS = () => gulp.watch('./src/js/blocks/', webpack);
const watchPHP = () => gulp.watch('./**/*.php', sniffs);
const watchVersion = () => gulp.watch('./package.json', version);

// CSS concat, auto-prefix and minify
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
		.pipe(sass.sync(sassOptions).on('error', sass.logError))
		.pipe(concat('cl.built.css'))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(header(banner, { pkg : pkg } ))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest('./css/'));

  done();
}

// JS concat, strip debugging and minify
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

	// Run eslint for src js
  //  gulp.src('./src/js/*.js')
  //    .pipe(eslint(done))
  //    .pipe(eslint.format());

	// Compile src js
    gulp.src('./src/js/*.js')
        .pipe(concat('cl.built.js'))
        .pipe(terser())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./js/'));

	done();
}

function wysiwyg(done) {

  // Run eslint for wysiwyg js
  //gulp.src('./js/wysiwyg/*.js')
  //  .pipe(eslint(done))
  //  .pipe(eslint.format());

  done();
}

// Run codesniffer
function sniffs(done) {

    return gulp.src('.', {read:false})
        .pipe(shell(['./.sniff']));

    done();

}

// Run webpack
function webpack(done) {

    return gulp.src('.', {read:false})
        .pipe(shell(['npx webpack']));

    done();

}

// Update plugin version
function version(done) {

	gulp.src('./uri-component-library.php')
		.pipe(replace({
			patterns: [{
				match: /Version:\s([^\n\r]*)/,
				replace: 'Version: ' + pkg.version
			}]
		}))
		.pipe(gulp.dest('./'));

    done();
}

// Default
const dev = gulp.series(
    gulp.parallel(styles, scripts, wysiwyg, sniffs, webpack, version),
    gulp.parallel(watchCSS, watchJS, watchWYSIWYGJS, watchBlocksJS, watchPHP, watchVersion)
);
exports.default = dev;


function done() {
	console.log('done');
}