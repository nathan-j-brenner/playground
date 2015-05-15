//Objects: Methods and Inheritance
// .interpolate does the same thing as .join

//delimiter?

//implement a method interpolate
// var spanishNumbers = ['uno', 'do', 'tres', 'catorce'];
// console.log(spanishNumbers);
// spanishNumbers.interpolate = function(delimiter) {
// 	var combineString = '';
// 	for (var i = 0; i < this.length; i++) {
// 		combineString += this[i] + delimiter;
// 	};
// 	combineString += this[this.length - 1]
// 	return combineString;
// };
// console.log(spanishNumbers.interpolate(', '));


//constuctor: a function that creates and returns a new object
//start with a capital letter: functions that are constuctors 
//arguments on for loop refurs to all the arguments in that function
//arguments object is an array but not a member of the array class

//new when you call MyArray with new before it, js creates a new js object and assign this to that object

// var MyArray = function () {
//   for (var i = 0; i < arguments.length; i++) {
//     this[i] = arguments[i];
//   }
//   this.interpolate = function(delimiter) {
//     var joined = ""
//     for (var i = 0; i < this.length - 1; i++) {
//       joined += this[i] + delimiter;
//     }
//     joined += this[this.length - 1];
//     return joined;
//   };
// }

// var someArray = new MyArray(1, 2, 3, 4, 5);

// console.log(someArray);

// //prototype: 

// var _ = require('lodash')
// _.keys({}) // []
// {}._proto_ // []
// [].forEach //[Function: forEach]
// _.keys([]) //[]

// //if you want interpolate available everywhere:
// class_name.prototype.method_name = function(first_argument) {
// 	// body...
// };
// class.method_name

// Array.prototype.interpolate = function(delimiter) {
//   var joined = ""
//   for (var i = 0; i < this.length - 1; i++) {
//     joined += this[i] + delimiter;
//   }
//   joined += this[this.length - 1];
//   return joined;
// };

// ["uno", "dos", "tres", "cuatro", "cinco", "cinco", "seis"].interpolate(", ");

//monkey patching:handy but 


// function MyArray() {} //undefined
// MyArray.prototype = new Array() // []
// (new MyArray()).forEach //[Function: forEach]

//short curciut boolean opperators: you don't need to keep evaluating things once you know the expression
//boolean opperators ||  && used to create a if then statement that returns true or false
//true || false returns true
//true && false can't quit early when you get a true, have to keep going to false
// true && true; => true
// true && false; => false
// false && true; => false
// false && false;  // => false

// true || true; => true
// true || false; => true
// false || true; => true
// false || false; => false

//truthyness: where any value can be interpreted as if it were a boolean
//falsy: number: 0, NaN, false; object: null; undefined, empty string(" ")

//prescedence table
var erin = {
	name: "erin"
};
var attribute = "name";
console.log(erin.attribute);

var fs = require('fs');
var config;
fs.readFile('config.json', function(error, contents) { config = JSON.parse(contents); });
if (config.verbose) {
	console.log('verbose configureation enabled');
}


for (var i = 0; i < 10; i++) {
	console.log("I'm in the loop and i is " + i);
	setTimeout(function(){
		console.log("I'm in the function and i is " + i)
	}, i*1000)
}; // loop happens immediately, then the function runs


//areas to focus: module.exports, everything you define in a module isa var local to that module
//async callback, closure, shadowing
//how to know  what functions are sync and async, something that takes more time than just doing the work on the process will be async.  If you ahve to wait for something, it'll be async

//functions are values
//npm init creates a package with everything you need to create a new package



//ssh keys encrypted public key encryption
//private secret, don't tell anyone
//public: open to anyone
// ssh: clone with ssh so you never have to enter your password
//and you can shell into remote servers
// pgp: hard to work with






















