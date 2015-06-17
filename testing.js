// var assert = require('assert');
// var arr = [1, 2, 3];
// // var	lastElem = arr.pop();

// // assert.equal(lastElem, 3, "expected " + lastElem + " to equal 3, but it didn't");
// // assert.fail(lastElem, 4, "expected " + lastElem + " to equal 3, but it didn't");
// //what is the forth argument 'operator' for .fail?
// // assert.notDeepEqual(lastElem, '2', "expected " + lastElem + " to equal 3, but it didn't");

// var addElem = arr.push(3);
// assert.equal(addElem, 4, "expected " + addElem + " to be the last element added to arr");
// console.log(arr);

var fakeArray = require('../fakearray.js');
var assert = require('assert');

describe('My fake array object', function() {
  describe('The pop method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should return the final element', function() {
      assert.equal(fakeArray.pop(), 3);
    });
  });
});