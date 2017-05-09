const Slot = require('./slot')
function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}

/*
    PreComputeLineCombinationOnSameFace is a class which produce a mapTable.
    A mapTable will map array of index of winLines and return the result.
    The result is an array which contain index of winlines.
    For Example.
    let winLines = [[1,2,3], <- index 0
                    [4,5,6], <- index 1
                    [7,8,9], <- index 2
                    [4,2,3], <- index 3
                    ]
    If we pick index 0,1 and put item in a slot table(3*3).
    The slot will look like :
    [1,1,1]
    [1,1,1]
    [0,0,0]
    For each element of winlines. The element index 0,1,3 will hit the table,
    so  mapTable[[0,1]] will produce [0,1,3]
*/
class PreComputeLineCombinationOnSameFace {
    constructor(slot){
        if(slot){
            this.slot = slot
            this.LIMIT_OF_ONE = 3
            this.combiList = new Set()
            this.calculateCombinationLineOnSameFace(0,0,this.slot.winLines,this.slot.winLines.length)
            this.power3SetOfWinLines = this.createLineFromCombiList(this.combiList,this.slot.winLines)
            this.mapTable = this.createMapTable(this.combiList,
                                                this.slot.winLines,
                                                this.slot.NUMBER_OF_COLUMNS,
                                                this.slot.NUMBER_OF_ROWS)
            //this.mapTable[[1,2]] -> [1,2,4,6,8] something like this.
            
        }
    }
    createMapTable(combiList,winLines,cols,rows){
        let obj = {}
        
        for(let eachCombilist of combiList){
            let key = this.createKey(eachCombilist)
            const table = this.initTable(cols,rows)
            let lines = this.getWinLinesFromKey(key,winLines)
            let filledTable = this.fillTableWithWinLines(table,lines)
            let value = this.createMapTableValue(filledTable,winLines)
            obj[key] = value
        
        }
        return obj
    }
    createMapTableValue(table,winLines){
        let valueList = []
        for(let i=0;i<winLines.length;i++){
            let lines = winLines[i]
            if(this.isThisWinLineOnTable(table,lines))
                valueList.push(i)
            
        }
        return valueList
    }
    getWinLinesFromKey(key,winLines){
        let temp = []
        for(let i=0;i<key.length;i++){
            let index = key[i]
            temp.push(winLines[index])
        }
        return temp
    }
    calculateCombinationLineOnSameFace(index,numOfOne,winLines,numOfWinLines){
        
        if(typeof this.calculateCombinationLineOnSameFace.state == 'undefined'){
            this.calculateCombinationLineOnSameFace.state = Array(numOfWinLines).fill(0)
        }
        
        if(index == numOfWinLines){
            this.combiList.add(Array.from(this.calculateCombinationLineOnSameFace.state))
            return ;
        }
        if(numOfOne == this.LIMIT_OF_ONE){
            this.calculateCombinationLineOnSameFace.state[index] = 0
            this.calculateCombinationLineOnSameFace(index+1,numOfOne,winLines,numOfWinLines)
        }
        else{
            this.calculateCombinationLineOnSameFace.state[index] = 0
            this.calculateCombinationLineOnSameFace(index+1,numOfOne,winLines,numOfWinLines)
            this.calculateCombinationLineOnSameFace.state[index] = 1
            this.calculateCombinationLineOnSameFace(index+1,numOfOne+1,winLines,numOfWinLines)
        }
        
    }
    createLineFromCombiList(combiList,winLines){
        
        let list = new Set()
        for(let eachCombination of combiList){
            let temp = []
            for(let i = 0 ;i<eachCombination.length;i++){
                    if(eachCombination[i]==1)
                        temp.push(winLines[i])
            }
            if(temp.length!=0)
                list.add(temp)
        }
        return list
        
    }
    createKey(list){
        let temp = []
        for(let i=0;i<list.length;i++)
            if(list[i] == 1)
                temp.push(i)
        return temp
    }
    initTable(rows,cols){
        return Array(cols*rows).fill(0)
    }
    fillTableWithWinLines(table,winLines){
        let newTable = table
        for(let line of winLines){
            for(let i=0;i<line.length;i++){
                let index = line[i]-1
                newTable[index]=1
            }
        }
        return newTable
    }
    
    isThisWinLineOnTable(table,line){
        for(let i=0;i<line.length;i++){
            let index = line[i]-1
            if(table[index]==0)
                return false
        }
        return true
    }
}

module.exports = PreComputeLineCombinationOnSameFace
