var arr = ['a', 'b', 'c'];
var fakeArray = require('../fakearray.js');
var assert = require('assert');

describe('My fake array object', function() {
  describe('The pop method', function() {

    // before(function() {
    //   fakeArray[0] = 1;
    //   fakeArray[1] = 2;
    //   fakeArray[2] = 3;
    //   fakeArray.length = 3;
    // });

    it('should return the final element', function() {
      assert.equal(arr.pop(), 'c');
    });
  });
  describe('The push method', function(){
    it('should return the length of the array', function(){
      assert.equal(arr.length, 2);
    });
  });
  describe('The shift method', function(){
    it('should return the first element', function(){
      assert.equal(arr.shift(), 'a');
    });
  });
  describe('The unshift method', function(){
    it('should return the length of the array', function(){
      assert.equal(arr.length, 1);
    });
  });
});

/*
pop: removes last element of the array, returns that element
push: adds element to the end of the array, returns the length of the array
shift: removes the first element of an array, returns that element
unshift: adds an element to the beginning of an array, returns the length of the array
*/