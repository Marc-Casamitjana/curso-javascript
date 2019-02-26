function numbersReverse(num) {
    var it = 7;
    var num = num;
    var result = '';

    while (true) {
        if (it < num) { break; }
        result += num;
        it--;
    }
    return result;
}

function numbers(num) {
    var it = 0;
    var result = '';

    while (true) {
        if (it > num) { break; }
        result += num;
        it++;
    }
    return result;
}
console.log(numbers(4));

function piramid(num) {
    var it = 0;
    while (true) {
        if (it > num) {break;}
        console.log(numbers(it));
        it++;
    }
}


function reversePiramid(num) {
    var it = 0;
    while (true) {
        if (it > num) {break;}
        console.log(numbersReverse(it));
        it++;
    }
}

// reversePiramid(7);
// piramid(7);

function analyzeFor(){
    let i;
    for(i=0; i<10; i++){
        console.log('inside', i);
    }
    return i;
}

console.log(analyzeFor());