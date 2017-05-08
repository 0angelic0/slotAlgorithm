class CreateFace {
    constructor(props){
        if(props){
            this.NUMBER_OF_COLUMNS = props.NUMBER_OF_COLUMNS
            this.NUMBER_OF_FACE = props.NUMBER_OF_FACE
            this.faceList = this.createFaceAndNumFace(this.NUMBER_OF_FACE,this.NUMBER_OF_COLUMNS)
        }
    }
    
    createFaceAndNumFace(numFaces,numCol){
        let temp = []
        for(let i = 3; i<=numCol; i++){
            for(let j=1;j<=numFaces;j++){
                temp.push({FACE:j,NUM_OF_FACE:i})
            }
        }
        return temp
    }

}

module.exports = CreateFace
