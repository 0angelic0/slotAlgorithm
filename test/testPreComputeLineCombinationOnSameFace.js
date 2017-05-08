let should = require('should')
const PreComputeLineCombinationOnSameFace = require('../src/PreComputeLineCombinationOnSameFace')

describe('Test PreComputeLineCombinationSameFace class',function(){
    it('generate combiList when numOfLine = 3',function(){
        let winLines = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        let preComputeLineCombinationOnSameFace = new PreComputeLineCombinationOnSameFace({winLines:winLines})
        let obj = [
            [0,0,0],
            [0,0,1],
            [0,1,0],
            [0,1,1],
            [1,0,0],
            [1,0,1],
            [1,1,0],
            [1,1,1]
        ]
        preComputeLineCombinationOnSameFace.combiList.should.eql(obj)
    })
})
