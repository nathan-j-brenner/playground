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



function once(f){
	knownOnce = false;
	return function(){
		if(knownOnce === false){
			knownOnce = f();
		}
		return knownOnce;
	};
}

var findTrueLove = once(function(){
	console.log("Looking for true love");
});

findTrueLove();
findTrueLove();




























