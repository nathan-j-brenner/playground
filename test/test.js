// var arr = ['a', 'b', 'c'];
var fakeArray = require('../fakearray.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;


describe('My fake array', function() {
  describe('The pop method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should return the final element', function() {
      expect(fakeArray.pop()).to.equal(3);
    });
    it('should have a length', function(){
      expect(fakeArray).to.have.length(2);
    });
    it('should contain the first element', function(){
      expect(fakeArray[0]).to.equal(1);
    });
    it('should contain the second element', function(){
      expect(fakeArray[1]).to.equal(2);
    });
    it('should not contain popped element', function(){
      assert.notEqual(fakeArray[2], 3 );
    });
  });
  // describe('The push method', function(){
  //   it('should return the length of the array', function(){
  //     assert.equal(arr.push('d'), 3);
  //   });
  // });
  // describe('The shift method', function(){
  //   it('should return the first element', function(){
  //     assert.equal(arr.shift(), 'a');
  //   });
  // });
  // describe('The unshift method', function(){
  //   var arr = ['a', 'b', 'c'];
  //   it('should return the length of the array', function(){
  //     assert.equal(arr.unshift('d'), 4);
  //   });
  // });
});

/*
pop: removes last element of the array, returns that element
push: adds element to the end of the array, returns the length of the array
shift: removes the first element of an array, returns that element
unshift: adds an element to the beginning of an array, returns the length of the array
*/