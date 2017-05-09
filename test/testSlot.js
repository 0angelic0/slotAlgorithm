let should = require('should')
const Slot = require('../src/Slot')

describe('Test Slot Class',function(){
    it('Test createRewardTable',function(){
        let slot = new Slot({
            NUMBER_OF_LINE:3,
            NUMBER_OF_ROWS:3,
            NUMBER_OF_COLUMNS:3,
            MIN_BET_PER_LINE:50,
            NUMBER_OF_FACE:11,
            WIN_LINES:[[1,2,3],[4,5,6],[7,8,9]],
            MULTIPLIER_TABLE:[0,5,10,20,50,100,200,500,1000]
        })
        let obj = [0,250,500,1000,2500,5000,10000,25000,50000]
        slot.rewardTable.should.eql(obj)
    })
})
