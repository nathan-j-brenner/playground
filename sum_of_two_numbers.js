var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Pick a number", function(numberA){
	rl.question("Pick a second number", function(numberB){
		console.log(numberA + " + " + numberB + " = " + (parseInt(numberA) + parseInt(numberB));
	});
});

// rl.question("Pick a second number", function(numberB){
// 	console.log(numberA + " + " + numberB + " = " + (numberA + numberB));
// });