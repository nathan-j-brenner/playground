// var foo = 1;
// function bar() {
// 	if (!foo) {
// 		var foo = 10;
// 	}
// 	console.log(foo);
// }
// bar();

// var a = 1;
// function b() {
// 	a = 10;
// 	return;
// 	function a() {}
// }
// b();
// console.log(a);


function freezeI(i){
	return function() {
    	console.log(array[i]);
  	}
}
var array = ["hello", "world"];
var callbacks = [];
for (var i = 0; i < array.length; i++) {
  callbacks.push(freezeI(i));
}

callbacks.forEach(function(c) { c(); });