class Slot{
    /*
    {
        NUMBER_OF_LINE:,
        NUMBER_OF_ROWS:,
        NUMBER_OF_COLUMNS:,
        MIN_BET_PER_LINE:,
        NUMBER_OF_FACE,
        WIN_LINES:,
        MULTIPLIER_TABLE:,
        FOUR_FACES_MULTIPLIER:,
        FIVE_FACES_MULTIPLIER:
    }
    */
    constructor(props){
        this.NUMBER_OF_ROWS = props.NUMBER_OF_ROWS
        this.NUMBER_OF_COLUMNS = props.NUMBER_OF_COLUMNS
        this.MIN_BET_PER_LINE = props.MIN_BET_PER_LINE
        this.NUMBER_OF_FACE = props.NUMBER_OF_FACE
        this.multiplierTable = props.MULTIPLIER_TABLE
        this.fourFacesMultiplier = props.FOUR_FACES_MULTIPLIER
        this.fiveFacesMultiplier = props.FIVE_FACES_MULTIPLIER
        this.winLines = props.WIN_LINES
        if(props.WIN_LINES)
            this.NUMBER_OF_LINE = props.WIN_LINES.length
        if(this.MIN_BET_PER_LINE && this.multiplierTable)
            this.rewardTable = this.createRewardTable(this.MIN_BET_PER_LINE,this.multiplierTable)
    }
    createRewardTable(minBetPerLine,multiplierTable){
        let temp = Array.from(multiplierTable)
        for(let i=0;i<temp.length;i++){
            temp[i] *= minBetPerLine
        }
        return temp
    }
}
module.exports = Slot
