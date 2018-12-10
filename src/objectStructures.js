const foo = { x: 1, y: 2 }
const fooArr = [1, 2, 3, 4, 5];
function at(obj, prop) {
    return obj[prop];
}

// console.log(at(foo, 'x'));

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
    at: at
}



console.log(at(foo, 'y'))