const {
	watch,
	parallel,
	series
} = require('gulp');

module.exports = function watching() {
	watch('styles/**/*.scss', parallel('style'));
	
}