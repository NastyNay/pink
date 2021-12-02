const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.webp = tasks.webp;
exports.watch = tasks.watch;
exports.bs_html = tasks.bs_html;


exports.default = gulp.parallel(
	exports.style,
	exports.webp,
	exports.bs_html,
	exports.watch
)

// const {
// 	src,
// 	dest
// } = require('gulp');
// import sass from 'gulp-sass';
// import bulk from 'gulp-sass-bulk-importer';
// import prefixer from 'gulp-autoprefixer';
// import clean from 'gulp-clean-css';
// import concat from 'gulp-concat';
// import map from 'gulp-sourcemaps';
// import bs from 'browser-sync';
// import plumber from 'gulp-plumber';

// module.exports = function style() {
// 	return src('styles/**/*.scss')
// 	    .pipe(plumber())
// 		.pipe(map.init())
// 		.pipe(bulk())
// 		.pipe(sass({
// 			outputStyle: 'compressed'
// 		}).on('error', sass.logError))
// 		.pipe(prefixer({
// 			overrideBrowserslist: ['last 8 versions'],
// 			browsers: [
// 				'Android >= 4',
// 				'Chrome >= 20',
// 				'Firefox >= 24',
// 				'Explorer >= 11',
// 				'iOS >= 6',
// 				'Opera >= 12',
// 				'Safari >= 6',
// 			],
// 		}))
// 		.pipe(clean({
// 			level: 2
// 		}))
// 		.pipe(concat('style.min.css'))
// 		.pipe(map.write('../sourcemaps/'))
// 		.pipe(dest('dist/css/'))
// 		.pipe(bs.stream())
// }