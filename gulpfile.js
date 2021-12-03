const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.watch = tasks.watch;
exports.bs_html = tasks.bs_html;


exports.default = gulp.parallel(
	exports.style,
	exports.rastr,
	exports.webp,
	exports.bs_html,
	exports.watch
)
