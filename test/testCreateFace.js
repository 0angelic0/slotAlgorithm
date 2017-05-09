let should = require('should')
const CreateFace = require('../src/CreateFace')
const Slot = require('../src/Slot')
describe('Test CreateFace class',function(){
    it('can createFaceAndNumFace',function(){
        let slot = new Slot({NUMBER_OF_COLUMNS:5,NUMBER_OF_FACE:3,MULTIPLIER_TABLE:[0,5,10,20,50,100,200,500,1000]})
        let createFace = new CreateFace(slot)
        let obj = [
            {FACE:1,NUM_OF_FACE:3,MULTIPLIER:5},
            {FACE:2,NUM_OF_FACE:3,MULTIPLIER:10},
            {FACE:3,NUM_OF_FACE:3,MULTIPLIER:20},
            
            {FACE:1,NUM_OF_FACE:4,MULTIPLIER:5},
            {FACE:2,NUM_OF_FACE:4,MULTIPLIER:10},
            {FACE:3,NUM_OF_FACE:4,MULTIPLIER:20},
            
            {FACE:1,NUM_OF_FACE:5,MULTIPLIER:5},
            {FACE:2,NUM_OF_FACE:5,MULTIPLIER:10},
            {FACE:3,NUM_OF_FACE:5,MULTIPLIER:20},
            
        ]
        createFace.faceList.should.eql(obj)
    })
})
