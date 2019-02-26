var objectStructures = require('../src/objectStructures.js');
var expect = require('expect.js');

const object = { x : 1, y : 2}

describe('objectStructures.js', function () {
    describe('at', function () {
        it('should give the value when object and key passed', function () {
            expect(typeof objectStructures.at).to.be('function');
            expect(objectStructures.at(object, 'x')).to.be(1)
        });
    });
    describe('keys', function () {
        it('should return an array with object keys', function () {
            expect(typeof objectStructures.keys).to.be('function');
            expect(objectStructures.keys(object)).to.eql(['x','y'])
        });
    });
});
