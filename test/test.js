// var arr = ['a', 'b', 'c'];
var fakeArray = require('../fakearray.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;


describe('My fake array', function() {
  describe('The pop method', function() {

    before(function() {
      fakeArray[0] = 'alpha';
      fakeArray[1] = 'beta';
      fakeArray[2] = 'charley';
      fakeArray.length = 3;
    });

    it('should return the final element', function() {
      expect(fakeArray.pop()).to.equal('charley');
    });
    it('should have a length', function(){
      expect(fakeArray).to.have.length(2);
    });
    it('should contain the first element', function(){
      expect(fakeArray[0]).to.equal('alpha');
    });
    it('should contain the second element', function(){
      expect(fakeArray[1]).to.equal('beta');
    });
    it('should not contain popped element', function(){
      assert.notEqual(fakeArray[2], 'charley' );
    });
  });
  describe('The push method', function(){

    before(function() {
      fakeArray[0] = 'alpha';
      fakeArray[1] = 'beta';
      fakeArray[2] = 'charley';
      fakeArray.length = 3;
    });
    it('should return the length of the array', function(){
      expect(fakeArray.push('delta')).to.equal(4);
    });
    it('should have a defined value', function(){
      expect(fakeArray[3]).to.equal('delta');
    });
    it('should have a length added by one', function(){
      expect(fakeArray).to.have.length(4);
    });
  });
  describe('The shift method', function(){

    before(function() {
      fakeArray[0] = 'alpha';
      fakeArray[1] = 'beta';
      fakeArray[2] = 'charley';
      fakeArray.length = 3;
    });

    it('should return the first element of the array', function(){
      expect(fakeArray.shift()).to.equal('alpha');
    });
    it('should have a length less by one', function(){
      expect(fakeArray).to.have.length(2);
    });
  });
  describe('The unshift method', function(){
    before(function() {
      fakeArray[0] = 'alpha';
      fakeArray[1] = 'beta';
      fakeArray[2] = 'charley';
      fakeArray.length = 3;
    });

    it('should return the length of the array', function(){
      expect(fakeArray.unshift('delta')).to.equal(4);
    });
    it('should return the added element', function(){
      expect(fakeArray[0]).to.equal('delta');
    });
  });
});

/*
pop: removes last element of the array, returns that element
push: adds element to the end of the array, returns the length of the array
shift: removes the first element of an array, returns that element
unshift: adds an element to the beginning of an array, returns the length of the array
*/