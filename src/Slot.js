class Slot{
    /*
    {
        NUMBER_OF_LINE:,
        NUMBER_OF_ROWS:,
        NUMBER_OF_COLUMNS:,
        MIN_BET_PER_LINE:,
        NUMBER_OF_FACE,
        WIN_LINES:,
        MULTIPLIER_TABLE:
        ,FOUR_FACES_MULTIPLIER:,
        FIVE_FACES_MULTIPLIER:
    }
    */
    constructor(props){
        this.NUMBER_OF_ROWS = props.NUMBER_OF_ROWS
        this.NUMBER_OF_COLUMNS = props.NUMBER_OF_COLUMNS
        this.MIN_BET_PER_LINE = props.MIN_BET_PER_LINE
        this.NUMBER_OF_FACE = props.NUMBER_OF_FACE
        this.winLines = props.WIN_LINES
        this.NUMBER_OF_LINE = props.WIN_LINES.length
        this.multiplierTable = props.MULTIPLIER_TABLE
        this.fourFacesMultiplier = props.FOUR_FACES_MULTIPLIER
        this.fiveFacesMultiplier = props.FIVE_FACES_MULTIPLIER

    }
}
module.exports = Slot
