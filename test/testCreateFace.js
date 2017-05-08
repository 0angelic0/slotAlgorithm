let should = require('should')
const CreateFace = require('../src/CreateFace')
const Slot = require('../src/Slot')
describe('Test CreateFace class',function(){
    it('can createFaceAndNumFace',function(){
        let slot = new Slot({NUMBER_OF_COLUMNS:5,NUMBER_OF_FACE:3})
        let createFace = new CreateFace(slot)
        let obj = [
            {FACE:1,NUM_OF_FACE:3},
            {FACE:2,NUM_OF_FACE:3},
            {FACE:3,NUM_OF_FACE:3},
            
            {FACE:1,NUM_OF_FACE:4},
            {FACE:2,NUM_OF_FACE:4},
            {FACE:3,NUM_OF_FACE:4},
            
            {FACE:1,NUM_OF_FACE:5},
            {FACE:2,NUM_OF_FACE:5},
            {FACE:3,NUM_OF_FACE:5},
            
        ]
        createFace.faceList.should.eql(obj)
    })
})
