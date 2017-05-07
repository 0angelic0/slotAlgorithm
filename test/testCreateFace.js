let should = require('should')
const CreateFace = require('../src/CreateFace')

describe('Test CreateFace class',function(){
    it('can createFaceAndNumFace',function(){
        let createFace = new CreateFace({NUMBER_OF_COLUMNS:5,NUMBER_OF_FACE:3})
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
