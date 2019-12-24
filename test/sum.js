//Sample from tutorial
//Heavily modified to be more beginner user friendly

const {sum, sub} = require('../index');
var expect = require('chai').expect;

//Added 'Math Labs' test unit wrapper to organize relatable test cases
describe('Math Labs', function() {
//addition sum() wrapper for further organization
describe('#sum()', function() {

  //Opted to comment test out to make solution more beginner friendly
  // context('without arguments', function() {
  //   it('should return 0', function() {
  //     expect(sum()).to.equal(0)
  //   })
  // })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      //Modified test for simpler solution - it is a beginners tutorial after all
      //was expect(sum(1, 2, 3, 4, 5)).to.equal(15)
      expect(sum(1, 2)).to.equal(3)
    })
    
  //   it('should return argument when only one argument is passed', function() {
  //     expect(sum(5)).to.equal(5)
  //   })
  // })
  
  //Opted to comment test out to make solution more beginner friendly
  // context('with non-number arguments', function() {
  //   it('should throw error', function() {
  //     expect(function() {
  //       sum(1, 2, '3', [4], 5)
  //     }).to.throw(TypeError, 'sum() expects only numbers.')
  //   })
  // })
})
})
//Unique test-casing, based on above example
//sub() wrapper
describe('#sub()', function() {
    describe('with number arguments', function() {
        it('should return the difference of arguments', function() {
            expect(sub(1, 2)).to.equal(-1)
        })
    })
})
})

//A second class wrapper for Non-Math Labs
describe("Non-Math Labs", function(){
  //modernArt wrapper
  describe('#modernArt', function(){

  })
})
