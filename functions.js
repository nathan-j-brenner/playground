// function showUserDetail(){
// 	checkThatUserIsLoggedIn();
// }

// function editProfile(){
// 	checkThatUserIsLoggedIn();
// }

// //easier

// function loggedIn(action){
// 	return function(){
// 		if (userIsLoggedIn) {
// 			action();
// 		} else{
// 			return "You have to log in!"
// 		}
// 	}
// }

// //fibbonacci 1 1 (1+1)=2 (1+2) = 3 5 8

// /**
//  * Find the nth (zero-indexed) Fibonacci number.
//  */
// var fibonacci = function(n) {
//   return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
// };
// console.log(fibonacci(Number(process.argv[2])));

// //or
// /**
//  * Find the nth (zero-indexed) Fibonacci number.
//  */
// var fibonacci = function(n) {
//   return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
// };
// console.log(fibonacci(Number(process.argv[2])));

// //or

// var fibonacci = function(n){
// 	if(n>1){
// 		return fibonacci(n-1) + fibonacci(n-2);
// 	} else {
// 		return 1;
// 	}
// }

//speed up

// var knownFibonacciNumbers = {};
// var fibonacci = function(n) {
//   if (knownFibonacciNumbers[n] === undefined) {
//     if ( n > 1 ) {
//       knownFibonacciNumbers[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     } else {
//       knownFibonacciNumbers[n] = 1;
//     }
//     knownFibonacciNumbers[n] = n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
//   }
//   return knownFibonacciNumbers[n];
// };
// console.log(fibonacci(Number(process.argv[2])));

// memorizing
// var dumbFibonacci = function(n){
// 	return n > 1? dumbFibonacci(n-1) + dumbFibonacci(n-2) : 1;
// }

// var fibonacci = function(n){
// 	console.log(n);
// 	return n > 1 ? fibonacci(n-1) + fibonacci(n-2) : 1;
// };

// function memoize(f) {
//   var knownValues = {};
//   return function(n) {
//     if (knownValues[n] === undefined) {
//       knownValues[n] = f(n);
//     }
//     return knownValues[n];
//   }
// }
// fibonacci = memoize(fibonacci);
// console.log(fibonacci(Number(process.argv[40])));


// function once(f){
// 	var knownOnce = false;
// 	return function(){
// 		if(knownOnce === false){
// 			knownOnce = f();
// 		} 
// 		return knownOnce;
// 	};
// }

// var findTrueLove = once(function(){
// 	console.log("Looking for true love...");
// });

// findTrueLove();
// findTrueLove();


// mod 5 % 2 gives 1, which is the remainder
//implement filter function
var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [7, 8, 9, 10, 11, 12];
function filter(arrayArgument, divider){ //filter function  takes two arguments: an array and a number that will applied to each item in the array argument
	var filteredArray = [];  //this creates an empty array that will store the values that meet the qualifications of the diviser
	return function(){
		for(var i = 0; i<arrayArgument.length; i++){ //loops through each item in the array argument
			if((arrayArgument[i]%divider)===0){ //if the items in the array argument are divisible by divider
				filteredArray.push(arrayArgument[i]); //then all those array items are put into the filered array		
			}
		}
		if(filteredArray.length===0) { //if the filtered array has no items
			console.log("None of the numbers are dividable by " + divider);
		} else { //if the filtered array has items, then it prints out those items
			for(var n = 0; n<filteredArray.length; n++){ //this loop just removes the array syntax
				console.log(filteredArray[n]);
			}
		}
	};

}
var evenNumbers = filter(numbers, 2);
evenNumbers();



























