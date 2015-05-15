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
// var numbers = [1, 2, 3, 4, 5, 6];
// var numbers2 = [7, 8, 9, 10, 11, 12];
// function filter(arrayArgument, divider){ //filter function  takes two arguments: an array and a number that will applied to each item in the array argument
// 	var filteredArray = [];  //this creates an empty array that will store the values that meet the qualifications of the diviser
// 	return function(){
// 		for(var i = 0; i<arrayArgument.length; i++){ //loops through each item in the array argument
// 			if((arrayArgument[i]%divider)===0){ //if the items in the array argument are divisible by divider
// 				filteredArray.push(arrayArgument[i]); //then all those array items are put into the filered array		
// 			}
// 		}
// 		if(filteredArray.length===0) { //if the filtered array has no items
// 			console.log("None of the numbers are dividable by " + divider);
// 		} else { //if the filtered array has items, then it prints out those items
// 			for(var n = 0; n<filteredArray.length; n++){ //this loop just removes the array syntax
// 				console.log(filteredArray[n]);
// 			}
// 		}
// 	};

// }
// var evenNumbers = filter(numbers, 2);
// evenNumbers();


//improved version
// function filter(array, fn){
// 	var filtered = [];
// 	array.forEach(function(element) {
// 		if(fn(element)){
// 			filtered.push(element);
// 		}
// 	})
// 	return filtered;
// }

// var numbers = [1-10]
// var otherNumbers

// var sharedNumbers = filter(numbers, function(num) {return otherNumbers.indexOf(num) !== -1})

// reduce
// var arrays = [[10], ['string'], [{}]];
// var result = [];
// arrays.forEach(function(a) {result = result.concat(a);});
// result; //=> [10, 'string', {}]

// var numbers = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// numbers.forEach(function(n) {
//   sum += n;
// });
// console.log(sum); //=> 21


// var pairs = [
// 	['name', 'JSI'],
// 	['location', { city: 'Portland', 'state': 'OR'}],
// 	['school', 'PCS']
// ];
// var result = [];
// pairs.forEach(
// 	function(a, b) {
// 	result = result.concat('{' + a + ':' + b + '}');
// 	console.log(pairs);

// 	}, {});

// var obj = pairs.reduce(function(accumulatingValue, currentValue){
// 	//currentVale looks [key, value]
// 	var key = currentValue[0];
// 	var value = currentValue[1];
// 	accumulatingValue[key] = value;
// 	return accumulatingValue;
// }, {});

// console.log(obj);
// big picture structure 
// learning strategies
// sequence of topics

// collaboration, comfort zone/discomfort zone
// demand quality, communicate what you need, count your blessings

//at

function filter(array, fn){
	var filtered = [];
	array.forEach(function(element) {
		if(fn(element)){
			filtered.push(element);
		}
	});
	return filtered;
}

var numbers = [1, 2, 3, 4, 5, 6, 7];
var otherNumbers = [1, 3, 5, 7];
																						   																						
var sharedNumbers = filter(numbers, function(num) {return otherNumbers.indexOf(num) !== -1};);
// var array = function at(collection, property){
// 	atArray = [];
// 	collection.forEach(function(element){
// 		if(property(element)){
// 			atArray.push(element);
// 		}
// 	})
// 	return atArray;
// };
// array(["hello", "world", "today"], [1, 3]);















