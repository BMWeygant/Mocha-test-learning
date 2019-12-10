var sub = require('../index');
var expect = require('chai').expect;

describe('#sub()', function() {

    describe('without arguments', function(){
        it('should return 0', function() {
            expect(sub().to.equal(0))
        })
    })
    describe('with number arguments', function() {
        it('should return the difference of arguments', function() {
            expect(sub(1, 2)).to.equal(-1)
        })
    })
})