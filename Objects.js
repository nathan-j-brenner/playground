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

var MyArray = function () {
  var toReturn = [];
  for (var i = 0; i < arguments.length; i++) {
    toReturn[i] = arguments[i];
  }
  toReturn.interpolate = function(delimiter) {
    var joined = ""
    for (var i = 0; i < this.length - 1; i++) {
      joined += this[i] + delimiter;
    }
    joined += this[this.length - 1];
    return joined;
  };
  return toReturn;
  console.log(toReturn);
}


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