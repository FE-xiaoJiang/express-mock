// var mockConfig = require('./mockConfig');
// var random = require('string-random');
var randomTool = require('./randomTool');
var path = require('path');

function init(options) {
	if (!options) {
		var mockConfPath = path.resolve(process.cwd(), 'mocking.conf.js');
		var mockConfig = require(mockConfPath);
		options = { mockConfig };
	}
	let results = mock(options);
	return results;
}
/**
 * 根据配置mock数据
 * @return {[type]} [description]
 */
function mock(options) {
	var mockConfig = options.mockConfig || {};
	let results = {};
	for (let key in mockConfig) {
		results[key] = {};
		let dataModal = mockConfig[key];
		// console.log('dataModal:', dataModal);
		results[key] = iterateGenerateObject(dataModal);
	}
	// console.log('results:', results);
	return results;
}

/**
 * 获取array对应长度
 * @param  {[type]} keyOfArray   [description]
 * @param  {[type]} dataModal [description]
 * @return {[type]}              [description]
 */
function getArrayDataLength(keyOfArray, dataModal) {
	let sizeRE = new RegExp(`${keyOfArray}\.size=(.+)`);
	for (let key in dataModal) {
		let match = dataModal[key].match && dataModal[key].match(sizeRE);
		if (match) {
			return match[1];
		}
	}
	return 2; //TODO 需要智能化
}

/**
 * 递归mock数组
 * @param  {[type]} arrayModal    [description]
 * @param  {[type]} lengthOfArray [description]
 * @return {[type]}               [description]
 */
function iterateGenerateArray(arrayModal ,lengthOfArray) {
	// let lengthOfArray = getArrayDataLength(key, )
	let objModal = arrayModal[0];
	let arrayResults = [];
	if (objModal == 'string') {
		for (let i = 0; i < lengthOfArray; i++) {
			let objRecord = {};
			objRecord = randomTool.randString();
			arrayResults.push(objRecord);
		}
	} else if (objModal == 'int') {
		for (let i = 0; i < lengthOfArray; i++) {
			let objRecord = {};
			objRecord = randomTool.randInt();
			arrayResults.push(objRecord);
		}
	} else {
		for (let i = 0; i < lengthOfArray; i++) {
			let objRecord = {};
			objRecord = iterateGenerateObject(objModal);
			arrayResults.push(objRecord);
		}
	}
	
	return arrayResults;
}
/**
 * 递归mock对象
 * @param  {[type]} objModal [description]
 * @return {[type]}          [description]
 */
function iterateGenerateObject(objModal) {
	// console.log('objModal:', objModal);
	let sizeRE = new RegExp(`.+\.size=(.+)`);
	let objRecord = {};
	for (let key in objModal) {
		if (sizeRE.test(objModal[key])) {
			continue;
		} else if (!(objModal[key] instanceof Array) && objModal[key] == 'string') {
			objRecord[key] = randomTool.randString();
		} else if (!(objModal[key] instanceof Array) && objModal[key] == 'int') {
			objRecord[key] = randomTool.randInt();
		} else if (!(objModal[key] instanceof Array) && objModal[key] == 'id') {
			objRecord[key] = randomTool.randIdString();
		} else if (!(objModal[key] instanceof Array) && objModal[key] == 'date-time') {
			objRecord[key] = randomTool.randDateTime();
		} else if (!(objModal[key] instanceof Array) && objModal[key] == 'timestamp') {
			objRecord[key] = randomTool.randTimeStamp();
		} else if (objModal[key] instanceof Array) {
			let arraylen = getArrayDataLength(key, objModal);
			// console.log(key, 'length:', arraylen);
			objRecord[key] = iterateGenerateArray(objModal[key], arraylen);
		} else if (objModal[key] instanceof Object) {
			objRecord[key] = iterateGenerateObject(objModal[key]);
		} else {
			objRecord[key] = objModal[key];
		}
	}
	// console.log('objRecord:', objRecord);
	return objRecord;
}

// init();

module.exports = init;
