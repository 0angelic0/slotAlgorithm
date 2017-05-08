let should = require('should')
const PreComputeLineCombinationOnSameFace = require('../src/PreComputeLineCombinationOnSameFace')
const Slot = require('../src/Slot')
describe('Test PreComputeLineCombinationSameFace class',function(){
    it('generate combiList when numOfLine = 3',function(){
        
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        let slot = new Slot(
            {
                NUMBER_OF_ROWS:3,
                NUMBER_OF_COLUMNS:3,
                NUMBER_OF_FACE:11,
                WIN_LINES:winLines,
            }
        )
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace(slot)
        let obj = new Set([
            [0,0,0],
            [0,0,1],
            [0,1,0],
            [0,1,1],
            [1,0,0],
            [1,0,1],
            [1,1,0],
            [1,1,1]
        ])
        preComputeLineCombinationOnSameFace.combiList.should.eql(obj)
    })
    it('generate combiList when numOfLine = 5',function(){
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [7,2,9],
            [1,8,3]
        ]
        let slot = new Slot(
            {
                NUMBER_OF_ROWS:3,
                NUMBER_OF_COLUMNS:5,
                NUMBER_OF_FACE:11,
                WIN_LINES:winLines,
            }
        )
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace(slot)
        let obj = new Set([
            [0,0,0,0,0],
            [0,0,0,0,1],
            [0,0,0,1,0],
            [0,0,0,1,1],
            [0,0,1,0,0],
            [0,0,1,0,1],
            [0,0,1,1,0],
            [0,0,1,1,1],
            [0,1,0,0,0],
            [0,1,0,0,1],
            [0,1,0,1,0],
            [0,1,0,1,1],
            [0,1,1,0,0],
            [0,1,1,0,1],
            [0,1,1,1,0],
            [1,0,0,0,0],
            [1,0,0,0,1],
            [1,0,0,1,0],
            [1,0,0,1,1],
            [1,0,1,0,0],
            [1,0,1,0,1],
            [1,0,1,1,0],
            [1,1,0,0,0],
            [1,1,0,0,1],
            [1,1,0,1,0],
            [1,1,1,0,0]
        ])
        preComputeLineCombinationOnSameFace.combiList.should.eql(obj)
    })
    it('test createLineFromCombiList',function(){
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        let combiList =  new Set([
            [0,0,0],
            [0,0,1],
            [0,1,0],
            [0,1,1],
            [1,0,0],
            [1,0,1],
            [1,1,0],
            [1,1,1]
        ])
        let obj = new Set([
            [
                [1,2,3]
            ],
            [
                [4,5,6]
            ],
            [
                [7,8,9]
            ],
            [
                [1,2,3],
                [4,5,6]
            ],
            [
                [1,2,3],
                [7,8,9]
            ],
            [
                [4,5,6],
                [7,8,9]
            ],
            [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ],
        ])
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.createLineFromCombiList(combiList,winLines).should.eql(obj)
    })
    it('test createKey',function(){
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.createKey([1,0,1,0,1]).should.eql([0,2,4])
    })
    it('test initTable',function(){
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.initTable(3,3).should.eql([0,0,0,0,0,0,0,0,0])
    })
    it('test fillTableWithWinLines case#1',function(){
        let table = [0,0,0,0,0,0,0,0,0]
        let obj = [1,1,1,0,0,0,0,0,0]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        let newTable = preComputeLineCombinationOnSameFace.fillTableWithWinLines(table,[[1,2,3]])
        newTable.should.eql(obj)
    })
    it('test fillTableWithWinLines case#2',function(){
        let table = [0,0,0,0,0,0,0,0,0]
        let obj = [1,1,1,0,0,0,1,0,1]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        let newTable = preComputeLineCombinationOnSameFace.fillTableWithWinLines(table,[[1,2,3],[7,2,9]])
        newTable.should.eql(obj)
    })
    it('test isThisWinLineOnTable case#1',function(){
        let table = [0,0,0,0,0,0,0,0,0]
        let line = [1,2,3]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.isThisWinLineOnTable(table,line).should.be.equal(false)
    })
    it('test isThisWinLineOnTable case#2',function(){
        let table = [1,1,1,0,0,0,0,0,0]
        let line = [1,2,3]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.isThisWinLineOnTable(table,line).should.be.equal(true)
    })
    it('test isThisWinLineOnTable case#3',function(){
        let table = [1,0,1,0,0,0,0,0,1]
        let line = [1,3,9]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.isThisWinLineOnTable(table,line).should.be.equal(true)
    })
    it('test isThisWinLineOnTable case#4',function(){
        let table = [1,0,1,0,0,0,0,0,1]
        let line = [1,2,3]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.isThisWinLineOnTable(table,line).should.be.equal(false)
    })
    it('test getWinLinesFromKey',function(){
        let table = [1,0,1,0,0,0,0,0,1]
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        let key = [0,2]
        let obj = [
            [1,2,3],
            [7,8,9]
        ]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.getWinLinesFromKey(key,winLines).should.eql(obj)
    
    })
    it('test createMapTableValue',function(){
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,2,6],
            [1,5,3],
            [1,5,6],
            [1,5,9]
        ]
        let obj = [0,1,3,4,5]
        let filledTable = [1,1,1,1,1,1,0,0,0]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.createMapTableValue(filledTable,winLines).should.eql(obj)
    
    })
    it('test createMapTable',function(){
        let combiList = [
            [0,0,0],
            [0,0,1],
            [0,1,0],
            [0,1,1],
            [1,0,0],
            [1,0,1],
            [1,1,0],
            [1,1,1]
        ]
    
        let winLines = [
            [1,2,3], //0
            [4,5,6], //1
            [7,8,9], //2
            [1,2,6], //3
            [1,5,3], //4
            [1,5,6], //5
            [1,5,9] //6
        ]
        let obj = {}
        obj[[]] = []
        obj[[0]] = [0]
        obj[[1]] = [1]
        obj[[2]] = [2]
        obj[[0,1]] = [0,1,3,4,5]
        obj[[0,2]] = [0,2]
        obj[[1,2]] = [1,2]
        obj[[0,1,2]] = [0,1,2,3,4,5,6]
    
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace()
        preComputeLineCombinationOnSameFace.createMapTable(combiList,winLines,3,3).should.eql(obj)
    
    })
})
