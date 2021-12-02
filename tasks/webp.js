const {
	src
} = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('images/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('images', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['images', 'dist/img']))
}