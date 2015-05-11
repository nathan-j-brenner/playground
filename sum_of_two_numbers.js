var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Pick a number", function(numberA){
	rl.question("Pick a second number", function(numberB){
		numberA = parseInt(numberA);
		numberB = parseInt(numberB);
		console.log(numberA + " + " + numberB + " = " + (numberA + numberB));
	});
});

// rl.question("Pick a second number", function(numberB){
// 	console.log(numberA + " + " + numberB + " = " + (numberA + numberB));
// });