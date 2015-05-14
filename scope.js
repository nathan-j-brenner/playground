// var x = 5;
// var z;
var add = function(x, y) {
	console.log(result);
  	var result;
	result = x + y;
	return result;
};
var subtract = function(x, y) {
  var result;
  result = x - y;
  return result;
};

// console.log(x);

function hoist(){ //even though console.log comes before the variable is defined, the varible definition is created first.  Best practice: write it in the order that it'll be processed
	console.log(a);
	var a;
}
// hoist();

// var x = 0; //without this line: error
// var foo = function(x) { //local x shadows global x
// 	var bar = function(x) {
//     	return x; //without this line, x is undefined so x exists in global scope
//   	};
//   	return bar(x); //without this line, x is undefined so x exists in global scope
// };
// console.log(foo(x)); //x=0 x is from the global variable

// var x = 0;
function sequence(){
	console.log(x);
	x++;
}

// function counter(){
// 	console.log(x);
// 	x++;
// }

function counter(x){ //the argument determines what number to start on
	// var x = 0;
	return function(){
		console.log(x);
		x++;
	};
}



// var sequence1 = counter(3);
// var sequence2 = counter(0);
// sequence1(); //=> 0
// sequence1(); //=> 1
// sequence2(); //=> 0
// sequence1(); //=> 2
// sequence2(); //=> 1

var counter =  //module pattern
	function(){
	var x = 0;
	function count(val){
		x += val;
		console.log(x);
	}
	return {
		next: function(){
			count(1);
		},
		reset: function(){
			// x = val;
			// if (x===undefined){
			// 	x="null";
			// };;
			console.log(x);
		}
	};
};

var sequence1 = counter();
var sequence2 = counter();
// sequence1.next(); //=> 0
// sequence1.next(); //=> 1
// sequence2.next(); //=> 0
// sequence1.next(); //=> 2
// sequence1.reset(); //=> void
// sequence1.next(); //=> 0
// sequence2.next(); //=> 1
// sequence1.reset(5); //=> void
// sequence1.next(); //=> 5

var foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
	}
	alert(foo);
}
bar();
