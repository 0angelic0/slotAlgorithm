let should = require('should')
const CreateFace = require('../src/CreateFace')
const Slot = require('../src/Slot')
describe('Test CreateFace class',function(){
    it('can createFaceAndNumFace',function(){
        let slot = new Slot({
            NUMBER_OF_ROWS:3,
            NUMBER_OF_COLUMNS:5,
            MIN_BET_PER_LINE:50,
            NUMBER_OF_FACE:3,
            WIN_LINES:[[1,2,3],[4,5,6],[7,8,9]],
            MULTIPLIER_TABLE:[0,5,10,20,50,100,200,500,1000],
            FOUR_FACES_MULTIPLIER:[0,4,4,5,5,4,4,3,2,2,2,2],
            FIVE_FACES_MULTIPLIER:[0,20,20,15,15,10,10,6,5,5,4,5]
        })
        let createFace = new CreateFace(slot)
        let obj = [
            {FACE:1,NUM_OF_FACE:3,MULTIPLIER:5},
            {FACE:2,NUM_OF_FACE:3,MULTIPLIER:10},
            {FACE:3,NUM_OF_FACE:3,MULTIPLIER:20},
            
            {FACE:1,NUM_OF_FACE:4,MULTIPLIER:20},
            {FACE:2,NUM_OF_FACE:4,MULTIPLIER:40},
            {FACE:3,NUM_OF_FACE:4,MULTIPLIER:100},
            
            {FACE:1,NUM_OF_FACE:5,MULTIPLIER:100},
            {FACE:2,NUM_OF_FACE:5,MULTIPLIER:200},
            {FACE:3,NUM_OF_FACE:5,MULTIPLIER:300},
            
        ]
        createFace.faceList.should.eql(obj)
    })
})
