const Slot = require('./Slot')
class CreateFace {
    constructor(slot){
        this.slot = slot
        this.multiplierTable = slot.multiplierTable //[0,5,10,20,50,100,200,500,1000]
        this.faceList = this.createFaceAndNumFace(this.slot.NUMBER_OF_FACE,this.slot.NUMBER_OF_COLUMNS,this.multiplierTable)
    }
    createFaceAndNumFace(numFaces,numCol,multiplierTable){
        let temp = []
        for(let i = 3; i<=numCol; i++){
            for(let j=1;j<=numFaces;j++){
                let face = j
                let numOfFace = i
                temp.push({FACE:face,NUM_OF_FACE:numOfFace,MULTIPLIER:multiplierTable[j]})
            }
        }
        return temp
    }

}

module.exports = CreateFace
