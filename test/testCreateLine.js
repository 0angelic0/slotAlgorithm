let should = require('should')
const CreateLine = require('../src/CreateLine')

describe('Test CreateLine class', function() {
    it('can createLineList', function() {
        let createLine = new CreateLine({NUMBER_OF_LINE:3})
        createLine.numLineList.should.eql([1,2,3])
    })
})
