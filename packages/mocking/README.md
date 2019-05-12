# express-mock
mock API data for express

### Setup
-----

```sh
npm install express-mocking
```

```js
var mocking = require('express-mocking')({
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
        'recordSize': 'data.size=11', // 说明是data数组，size=11，该字段不生成mock数据
        'errCode': 0,
        'errMsg': "成功",
      },
      '/mockIntArray': {
        'data': ['int'],
        'totalCount': '30',
        'recordSize': 'data.size=16', // 说明是data数组，size=16，该字段不生成mock数据
        'errCode': 0,
        'errMsg': "成功",
      },
    }
});

app.use(mocking);
```

### options
#### mockConfig
##### e.g.
```js
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
}
```
##### 生成数据：
'/mockArray':
```js
{
  data: [{
    id: "ed8b4cc47ebc44b88604bd88ed8b00d9",
    name: "理睛活阳界等改面紧且却过小怕轻实信望五东等并党了师睛治起以多后八上海们赶意各怕变病准您也的科指识从建识家够清两上此更上最队千呢出将面睡像1七用产认书每当而很",
    content: "直爬色眼么过轻有识见女您情生雪的有认样命青亲师黑义话究赶往底叫群往响进等条爬工天拿北光又现者不士刻难阳别治情点3子孩些无多年里唱色跟步立场送经样实6关名",
    timestamp: 1557661601135,
    date: "2019-05-12 19:46",
    obj: {
      id: "b070ec5e63e44a66a67242cbd6495ddf"
    }
  }, {
    id: "fd8c9bfb1acf435a924a194427cdc589",
    name: "年声不块夜拿多应路习来常水什往本化决问小使很究",
    content: "花死放气听看马许过打色确便群了整内志阵全新拉科分变得件快父气但必父但里近业是坐给爷让师年今而全石很那究自觉未土倒哪思四流年些意想成于中够底确转接向兴下解争间有服连",
    timestamp: 1557661610135,
    date: "2019-05-01 13:46",
    obj: {
      id: "a1879399a3ba481fa24f78f97ff0f4b5"
    }
  }],
  errCode: 0,
  errMsg: "成功"
}
```
##### 注意
data为对象数组或者普通数组的时候，需要指定数组长度，指定方式为定义一个同级的key，该value以data.size=开头，其中data便是命名一致即可。
若需要字符串数组，如下即可：
```{
  key: ['string'], //int型数组即['int']
  size: 'key.size=10'
}
```
