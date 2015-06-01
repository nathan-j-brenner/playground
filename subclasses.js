var Queue = (function(){
	function Queue(vals){
		Deque.call(this,vals);
	}
	var proto = new Deque([]);
	proto.constructor = Queue;

	//proto.push adds vals to the end of an array
	proto.pop = undefined; //this would remove the last item of the array
	proto.unshift = undefined; //this would add an element to the beginning of an array
	//proto.shift = true; removes first element of the array

	return Queue;
})();