/* istanbul ignore next */
module.exports = {
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
};
