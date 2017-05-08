class CreateLine{
    constructor(props){
        
        this.NUMBER_OF_LINE = props.NUMBER_OF_LINE
        this.numLineList = this.createLineList(this.NUMBER_OF_LINE)
    
    }
    createLineList(numberOfLine){
        let temp = []
        for(let i=0;i<numberOfLine;i++)
            temp.push(i)
        return temp
    }
    
}
module.exports = CreateLine
