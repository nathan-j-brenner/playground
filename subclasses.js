function Deque() {
  this.arr = new Array();
}

  Deque.prototype.push = function (item) {
    return this.push(item)
  }
  //add an element to the end of an thisay, returns the length of the array

  Deque.prototype.pop = function () {
    return this.pop()
  }
  //removes the last element from an array, returns that element

  Deque.prototype.unshift = function (item) {
    return this.unshift(item)
  }
  //add an element to the beginning of an array, returns the length of the array

  Deque.prototype.shift = function () {
    return this.shift()
  }
  //removes the first element from an array and returns that element
}

var Queue = (function(){
	function Queue(){
		Deque.call(this);
	}
	// var proto = new Deque([]);
	// proto.constructor = Queue;
	var  proto = Object.create(Deque.prototype);

	//proto.push adds vals to the end of an array
	proto.pop = undefined; //this would remove the last item of the array
	proto.unshift = undefined; //this would add an element to the beginning of an array
	//proto.shift = true; removes first element of the array

	return Queue;
})();

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.shift());
console.log(queue.unshift());

function Ctor() {
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
// obj2.c is undefined
//Ctor.prototype access the prototype from the constructor
//obj1.__proto__ ugly, not really in javaScript
obj1.constructor.prototype.d = 3;
//every instance of Ctor has d: 3 because they are located in the prototype of Ctor





