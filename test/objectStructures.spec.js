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
});
