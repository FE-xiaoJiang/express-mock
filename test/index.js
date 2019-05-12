var chai = require('chai'),
	expect = chai.expect;
var mock = require('../packages/mocking/index');
var options = {
	mockConfig: {
	  '/mockArray': {
	    'data': [{
								id: 'id',
								name: 'string',
								content: 'string',
								date: 'date-time',
								timestamp: 'timestamp',
								obj: {
									id: 'id',
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
	it('mock数据测试', function() {
		var data = mock(options);
		var mockArrayData = data['/mockArray'];
		// console.log(mockArrayData)
		var arrayLen = options.mockConfig['/mockArray'].recordSize.match(new RegExp(`data\.size=(.+)`));
		console.log(mockArrayData.data.length);
		arrayLen = Number(arrayLen[1]);
		expect(mockArrayData.data.length).to.be.equal(arrayLen);
		expect(data['/mockObject'].data instanceof Object).to.be.equal(true);
		expect(typeof data['/mockStringArray'].data[0] == 'string').to.be.equal(true);
		expect(typeof data['/mockIntArray'].data[0] == 'number').to.be.equal(true);
	});
});