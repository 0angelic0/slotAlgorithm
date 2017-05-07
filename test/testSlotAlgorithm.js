let should = require('should')
const SlotAlgorithm = require('../slotAlgorithm')

describe('Test SlotAlgorithm class', function() {
  it('can randomLine', function() {
    let slotAlgorithm = new SlotAlgorithm()
    slotAlgorithm.randomNumLine().should.be.equal(2)
  })
})
