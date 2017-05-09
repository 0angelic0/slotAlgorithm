const Slot = require('./Slot')
class CreateFace {
    /*
        CreateFace is a class that produce an object.
        The input of this class is a slot object(which create from Slot class).
        For Example.
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
        console.log(createFace.faceList) ->
        [
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
        
        
    */
    
    constructor(slot){
        this.slot = slot
        this.multiplierTable = slot.multiplierTable //[0,5,10,20,50,100,200,500,1000]
        this.fourFacesMultiplier = slot.fourFacesMultiplier
        this.fiveFacesMultiplier = slot.fiveFacesMultiplier
        this.faceList = this.createFaceAndNumFace(this.slot.NUMBER_OF_FACE,
                                                  this.slot.NUMBER_OF_COLUMNS,
                                                  this.multiplierTable,
                                                  this.fourFacesMultiplier,
                                                  this.fiveFacesMultiplier)
        // {FACE:,NUM_OF_FACE:,MULTIPLIER:,}
    }
    createFaceAndNumFace(numFaces,numCol,multiplierTable,fourFacesMultiplier,fiveFacesMultiplier){
        let temp = []
        for(let i = 3; i<=numCol; i++){
            for(let j=1;j<=numFaces;j++){
                let face = j
                let numOfFace = i
                if(i==3)
                    temp.push({FACE:face,NUM_OF_FACE:numOfFace,MULTIPLIER:multiplierTable[j]})
                else if(i==4)
                    temp.push({FACE:face,NUM_OF_FACE:numOfFace,MULTIPLIER:multiplierTable[j]*fourFacesMultiplier[j]})
                else if(i==5)
                    temp.push({FACE:face,NUM_OF_FACE:numOfFace,MULTIPLIER:multiplierTable[j]*fiveFacesMultiplier[j]})
            }
        }
        return temp
    }

}

module.exports = CreateFace
