// module fakearray.js
module.exports = {
  length: 0,
  pop: function() {
    var returnValue = this[this.length - 1]; //returnValue should be the last element the array
    this[this.length-1] = undefined; //the last element of the array has a value of undefined
    this.length--;
    return returnValue;
  },
  push: function(input) {
    this[this.length] = input;
    this.length++;
  },
  // shift: function(){
  //   var returnValue = this[this.length - 1]
  //   this[this.length-1] = undefined;
  //   this.length--;
  //   return returnValue;
  // },
  // unshift: function(input){
  //   this[this.length] = input;
  //   this.length++;
  // }
};


/*
pop: removes last element of the array, returns that element
push: adds element to the end of the array, returns the length of the array
shift: removes the first element of an array, returns that element
unshift: adds an element to the beginning of an array, returns the length of the array
*/