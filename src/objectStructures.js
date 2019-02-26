
const foo = { x: 1, y: 2 }
const fooArr = [1, 2, 3, 4, 5];
// const arr = [1,2,3,4]

function at(obj, prop) {
    return obj[prop];
}

function set(arr, index, value){
    arr[index] = value;
}
// console.log(at(foo, 'x'));

// set(arr, 4, 'hola');
// console.log(arr);
// at(arr, 4);

function keys(obj){
    var keys = [];
    for(key in obj){
        keys.push(key);
    }
    return keys;
}

function foreach(obj, fn){
    var it = 0;
    var attr = keys(obj);
    while(true){
        if (it >= keys(obj).length){break;}
        fn(obj[attr[it]], attr[it]);
        it++;
    }
}

// foreach(foo, function(value, key){
//     console.log(`${key} : ${value}`)
// })

module.exports = {
    at,
    keys
}


// var obj1 = { }

// var obj = { x : 3, y : 4, z : 5};

// delete obj[z];
// console.log(obj);

var arr = [1,2,3,4,5];

arr.splice(2,3);
console.log(arr);