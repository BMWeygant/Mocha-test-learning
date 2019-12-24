const {sum, sub, modernArt} = require('../index');
var expect = require('chai').expect;

//Added 'Math Labs' test unit wrapper to organize relatable test cases
describe('Math Labs', function() {
//addition sum() wrapper for further organization
describe('#sum()', function() {
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2)).to.equal(3)
      })
    })
  })
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
    it('modernArt has a beautiful property', function(){
      expect(modernArt.beautiful).to.exist
    })
    it('modernArt has an abstract property', function(){
      expect(modernArt.abstract).to.exist
    })
    it('modernArt is in fact, modern', function(){
      expect(modernArt.modern).to.be.ok
    })
    it('modernArt has a critique attribute for observers input', function(){
      expect(modernArt.critique).to.be.a('string')
    })
  })
})
