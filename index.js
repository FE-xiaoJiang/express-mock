/**
 * express mock中间件
 * @type {[type]}
 */
// var mock = require('./mockConfig');
var generator = require('./lib/express-mock');
var mock = generator();

module.exports = function(options) {
  var mock = generator(options);
  return function(req, res, next){
    // console.log(req.url);
    var url = req.url;
    var isMock = req.query.mock;
    if(isMock){
      var path = url.split("?")[0];
      // console.log("mock path:",path);
      res.send(mock[path]);
      return;
    }
    next();
  }
}

