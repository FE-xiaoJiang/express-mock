var chai = require('chai'),
	expect = chai.expect;
var mock = require('../lib/express-mock');
var options = {
	mockConfig: {
	  '/mockArray': {
	    'data': [{
	              id: 'string',
	              name: 'string',
	              content: 'string',
	              obj: {
	                id: 'string',
	              },
	          }],
	    'recordSize': 'data.size=10', // 说明是data数组，size=10，该字段不生成mock数据
	    'errCode': 0,
	    'errMsg': "成功",
	  },
	  '/mockObject': {
	    'data': {
	      id: 'string',
	      name: 'string', 
	      content: 'string',
	    },
	    'testVar': 'int',
	    'errCode': 0,
	    'errMsg': "成功",
	  },
	  '/mockStringArray': {
	    'data': ['string'],
	    'totalCount': '30',
	    'recordSize': 'data.size=11', // 说明是data数组，size=10，该字段不生成mock数据
	    'errCode': 0,
	    'errMsg': "成功",
	  },
	  '/mockIntArray': {
	    'data': ['int'],
	    'totalCount': '30',
	    'recordSize': 'data.size=16', // 说明是data数组，size=10，该字段不生成mock数据
	    'errCode': 0,
	    'errMsg': "成功",
	  },
	}
};

describe('测试mock数据', function() {
	var data = mock(options);
	var mockArrayData = data['/mockArray'];
	console.log(mockArrayData)
	var arrayLen = options.mockConfig['/mockArray'].recordSize.match(new RegExp(`data\.size=(.+)`));
	arrayLen = Number(arrayLen[1]);
	expect(mockArrayData.data.length).to.be.equal(arrayLen);
	expect(data['/mockObject'].data instanceof Object).to.be.equal(true);
	expect(typeof data['/mockStringArray'].data[0] == 'string').to.be.equal(true);
	expect(typeof data['/mockIntArray'].data[0] == 'number').to.be.equal(true);
});