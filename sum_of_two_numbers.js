var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Pick a number", function(answer){
	console.log("You picked " +answer);
});