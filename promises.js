// function inASecond(cb) {
//     console.log('one sec...')
//     setTimeout(function() {
//         console.log('doing it now:')
//         cb();
//     },1000);
// }
// function sayHello() {
//     console.log('hello!');
// }

// // sayHello();

// function Promise(startDoingAsyncFn) {
//     var pendingTask = null;

//     this.then = function(afterwardFn) {
//         pendingTask = afterwardFn;
//     }

//     function fulfilPromise() {
//         if (pendingTask)
//             pendingTask();
//     }
//     startDoingAsyncFn(fulfilPromise);
// }


// // Optional factory using that ctor:
// function makePromise(startDoingAsyncFn) {
//     return new Promise(startDoingAsyncFn);
// }

// makePromise(inASecond).then(sayHello);

//exercise
function Promise(startDoingAsyncFn) {
    var pendingTask = [];

    this.then = function(afterwardFn) {
        pendingTask.push(afterwardFn);
        return this;
    }

    function fulfilPromise() {
    	var nextAction = pendingTask.shift();
        if (nextAction){
            nextAction(fulfilPromise);
        }
    }
    startDoingAsyncFn(fulfilPromise);
}

// Optional factory using that ctor:
function makePromise(startDoingAsyncFn) {
    return new Promise(startDoingAsyncFn);
}

function inASecond(cb) {
    console.log('one sec...')
    setTimeout(function() {
        console.log('doing it now:')
        cb();
    },1000);
}
function sayHello() {
    console.log('hello!');
}

makePromise(inASecond).then(inASecond).then(inASecond).then(inASecond);


//relate to databases: pg and knex have a promise interface
