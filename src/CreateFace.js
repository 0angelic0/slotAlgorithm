const Slot = require('./Slot')
class CreateFace {
    constructor(slot){
        this.slot = slot
        this.faceList = this.createFaceAndNumFace(this.slot.NUMBER_OF_FACE,this.slot.NUMBER_OF_COLUMNS)
    }
    createFaceAndNumFace(numFaces,numCol){
        let temp = []
        for(let i = 3; i<=numCol; i++){
            for(let j=1;j<=numFaces;j++){
                let face = j
                let numOfFace = i
                temp.push({FACE:face,NUM_OF_FACE:numOfFace})
            }
        }
        return temp
    }

}

module.exports = CreateFace
