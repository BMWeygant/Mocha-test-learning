//Sample from tutorial
const {sum, sub} = require('../index');
var expect = require('chai').expect;

describe('#sum()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(sum()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })
})

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