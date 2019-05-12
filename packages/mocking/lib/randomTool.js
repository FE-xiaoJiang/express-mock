var random = require('string-random');
var uuid = require('uuid');
var rdg = require('random-date-generator');
var chineseWords = require('./chinese-word').string500;

exports.randString = function() {
	return random(exports.generate2dnum(), {letters: chineseWords});
};

exports.randIdString = function() {
	return uuid.v4().replace(/\-/g, '');
}

exports.randAssicString = function() {
	return ;
}

exports.randTimeStamp = function() {
    let startDate = new Date(2015, 1, 1);
    let endDate = new Date();
	return new Date(rdg.getRandomDateInRange(startDate, endDate)).getTime();
}

exports.randDateTime = function() {
    let startDate = new Date(2015, 1, 1);
    let endDate = new Date();
	return formatDateTimeReg(rdg.getRandomDateInRange(startDate, endDate), 'YYYY-MM-DD hh:mm');
}

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

function formatDateTimeReg(millisecond, format) {
    var thisTime = new Date(millisecond);
    var o = {
        "M+": thisTime.getMonth() + 1, //月份
        "D+": thisTime.getDate(), //日
        "h+": thisTime.getHours(), //小时
        "m+": thisTime.getMinutes(), //分
        "s+": thisTime.getSeconds(), //秒
        "q+": Math.floor((thisTime.getMonth() + 3) / 3), //季度
        "S": thisTime.getMilliseconds() //毫秒
    };
    if (/(Y+)/.test(format)) format = format.replace(RegExp.$1, (thisTime.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}