function numberToStringIfElse(num){
    var msg;

    if(typeof num !== 'number'){
        throw new Error('NaN');
    }else if(num < 0){
        throw new Error('must be equal or greater than zero');
    }else if(num > 10){
        throw new Error('must be equal or lesser than ten');
    }

    if(num === 1){
        msg = 'one';
    }else if(num === 2){
        msg = 'two';
    }else if(num === 3){
        msg = 'three';
    }else if(num === 4){
        msg = 'four';
    }else if(num === 5){
        msg = 'five';
    }else if(num === 6){
        msg = 'six';
    }else if(num === 7){
        msg = 'seven';
    }else if(num === 8){
        msg = 'eight';
    }else if(num === 9){
        msg = 'nine';
    }else if(num == 10){
        msg = 'ten';
    }else{
        throw new Error('Must be integer');
    }
    return msg;
}

    var strings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    return strings[num];
    
console.log(numberToStringIfElse(9));


function numberToStringSwitchCase(num){
   
    
    if(typeof num != 'number'){
        throw new Error('NaN');
    }else if(num < 0){
        throw new Error('must be equal or greater than zero');
    }else if(num > 10){
        throw new Error('must be equal or lesser than ten');
    }
    var msg;

    switch(num){
        case 0: msg ='zero';
            break;
        case 1: msg ='one';
            break;
        case 2: msg ='two';
            break;
        case 3: msg ='three';
            break;
        case 4: msg ='four';
            break;
        case 5: msg ='five';
            break;
        case 6: msg ='six';
            break;
        case 7: msg ='seven';
            break;
        case 8: msg ='eight';
            break;
        case 9: msg ='nine';
            break;
        case 10: msg ='ten';
            break;
        
        
    }
    return msg;
}

console.log(numberToStringSwitchCase(6));

//en el unit test cascada con el switch

//no se puede usar else, si return
function numberToStringIfReturn(num){
    if(num === 0){
        return 'zero';
    }
    if(num === 1){
        return 'one';
    }
    if(num === 2){
        return 'two';
    }
    if(num === 3){
        return 'three';
    }
    if(num === 4){
        return 'four';
    }
    if(num === 5){
        return 'five';
    }
    if(num === 6){
        return 'six';
    }
    if(num === 7){
        return 'seven';
    }
    if(num === 8){
        return 'eight';
    }
    if(num === 9){
        return 'nine';
    }
    if(num === 10){
        return 'ten';
    }

}

console.log(numberToStringIfReturn(7));


module.exports = {numberToStringIfElse : numberToStringIfElse, 
                  numberToStringIfReturn : numberToStringIfReturn, 
                  numberToStringSwitchCase : numberToStringSwitchCase}



