// let a = 3;

// var foo = function () {
//     return a;
// }

// console.log(foo());

// console.log(b);
// var b = 4;

// foo();
// bar();

// var foo = function(){}
// function bar(){console.log('hola')}

// function foo(){
//     throw new Error('sad');
// }

// function bar(){
//     foo();
// }

// function qux(){
//     bar();
// }

// qux();

function factorial(num) {
let result = 1;
    for (let i = 0; i < num; i++) {
        result = result * (i + 1);
    }
    return result;
}


// console.log(factorial(3))


function fib(index){
    let result = [];
    for (let i = 0; i > 100; i++) {
        var fib = i++;
        result.push(i + i)
    }
    return result[index];
}

// console.log(fib(5));

function factRecursivo(n){
    if(n > 1){
        return n * factRecursivo(n - 1)
    }
    return 1;
}

// console.log(factRecursivo(5));

var arr = [1,2,3,4];
function sumArg(){
    var result = 0;
    console.log(arguments);
    for(i=0; i<arguments.length; i++){
        result = result + arguments[i]; 
    }
    return result;
}

// console.log(sum(1,2,3,4,5,6));

function sum(a, b){console.log( a+b);}

// sum.call();
// sum.apply();

// var i= 0;
// function a(){
//     if(i >= 10){
//         return;
//     }
//     else{
//     i++;
//     }
//     console.log(i);
//     b()
    
// }

// function b(){
//     a()
// }

// a();

function a(start, end){
    console.log(start);
    if(start >= end){return;}
    a(start+1, end);
}

// a(0, 10);

var logArgs = function(){
    var args = Array.prototype.slice.call(arguments)
    args.forEach(function(e) {
        console.log(e);
    });
}

// logArgs(1,2,3,4)


//////typeof exercici

function stringify (x) {
    console.log(Object.prototype.toString.call(x).toLowerCase().slice(8, 14));
}

// stringify({});

