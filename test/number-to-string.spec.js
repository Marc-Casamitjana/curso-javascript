var numberToString = require('../src/number-to-string.js');
var expect = require('expect.js');

describe('number-to-string.js', function(){
    describe('numberToStringIfElse', function(){
        it('should give a string with the number', function(){
            expect(typeof numberToString.numberToStringIfElse).to.be('function');
            expect(numberToString.numberToStringIfElse(5)).to.be('five');
            expect(numberToString.numberToStringIfElse).withArgs('b').to.throwException('NaN'); //en cas de llençar un throw error a la funcio
            expect(numberToString.numberToStringIfElse).withArgs('b').to.throwException('NaN'); //en cas de llençar un throw error a la funcio
            expect(numberToString.numberToStringIfElse).withArgs(5.4).to.throwException('Must be integer');
        });
    });
});
