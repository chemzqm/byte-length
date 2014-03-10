var length = require('byte-length');
var assert = require('assert');


describe('#byte-length', function () {
  it('should be 4', function () {
    var l = length('你好');
    assert(l === 4);
  })

  it('should be 5', function () {
    var l = length('hello');
    assert(l === 5);
  })
})
