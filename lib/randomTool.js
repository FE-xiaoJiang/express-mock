var random = require('string-random');
var chineseWords = require('./chinese-word').string500;

exports.randString = function() {
	return random(exports.generate2dnum(), {letters: chineseWords});
};

exports.randInt = function() {
	let num = exports.generateIntLess3(); //TODO 随机算法需要优化
	return parseInt(random(num, {letters: false, numbers: true}));
};

exports.randomFloat = function() {
	return exports.generateFloatFixed2();
}

/**
 * 小于3的数字
 * @return {[type]} [description]
 */
exports.generateIntLess3 = function() {
	return Math.floor(Math.random() * 3) + 1;
}

/**
 * 随机生成两位数
 * @return {[type]} [description]
 */
exports.generate2dnum = function() {
	return Math.floor(Math.random() * 90) + 10;
}

/**
 * 随机生成小数，保留两位小数 TODO优化
 * @return {[type]} [description]
 */
exports.generateFloatFixed2 = function() {
	return Math.floor(Math.random() * 100).toFixed(2);
}