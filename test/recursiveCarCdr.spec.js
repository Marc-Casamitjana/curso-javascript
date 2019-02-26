var schemeMethods = require('../src/recursiveCarCdr.js');
var expect = require('expect.js');

const object = { x : 1, y : 2}
const array = [ 1, 2, 3, 4];

    describe('at', function () {
        it('should return the first element of a list', function () {
            expect(typeof schemeMethods.car).to.be('function');
            expect(schemeMethods.car(array)).to.be(1)
        });
        
        it('should return the remainder of the list', function () {
            expect(typeof schemeMethods.cdr).to.be('function');
            
            expect(schemeMethods.cdr(array)).to.eql([2,3,4])
        });
    });
