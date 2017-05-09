class CreateLine{
    /*
        CreateLine class is a class that produce a numLineList.
        A numLineList create from NUMBER_OF_LINE(aka way to win).
        example:
        let createLine = CreateLine({NUMBER_OF_LINE:3})
        console.log(createLine.numLineList) -> [0,1,2]
    */
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
