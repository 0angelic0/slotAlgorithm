class PreComputeLineCombinationOnSameFace {
    constructor(props){
        if(props){
            this.LIMIT_OF_ONE = 3
            this.winLines = props.winLines
            this.mapTable = {}
            this.combiList = []
            this.calculateCombinationLineOnSameFace(0,0,this.winLines,this.winLines.length)
        }
    }
    calculateCombinationLineOnSameFace(index,numOfOne,winLines,numOfWinLines){
        
        if(typeof this.calculateCombinationLineOnSameFace.s == 'undefined'){
            this.calculateCombinationLineOnSameFace.s = Array(numOfWinLines).fill(0)
        }
        
        if(index==numOfWinLines){
            this.combiList.push(Array.from(this.calculateCombinationLineOnSameFace.s))
            return ;
        }
        if(numOfOne==this.LIMIT_OF_ONE){
            this.calculateCombinationLineOnSameFace.s[index] = 0
            this.calculateCombinationLineOnSameFace(index+1,numOfOne,winLines,numOfWinLines)
        }
        else{
            this.calculateCombinationLineOnSameFace.s[index] = 0
            this.calculateCombinationLineOnSameFace(index+1,numOfOne,winLines,numOfWinLines)
            this.calculateCombinationLineOnSameFace.s[index] = 1
            this.calculateCombinationLineOnSameFace(index+1,numOfOne+1,winLines,numOfWinLines)
        }
    }
}

module.exports = PreComputeLineCombinationOnSameFace
