class SlotAlgorithm {
    
    constructor(props){
        if(props){
            this.NUMBER_OF_LINE = props.NUMBER_OF_LINE
            this.NUMBER_OF_FACE = props.NUMBER_OF_FACE
            this.NUMBER_OF_COLUMNS = props.NUMBER_OF_COLUMNS
            this.NUMBER_OF_ROWS = props.NUMBER_OF_ROWS
        }
    }
    randomNumLine() {
        //TODO: ค่อยทำทีหลัง
        return 2
    }
    
    randomFaces(numLine) {
        // อาจจะต้อง Downgrade ถ้าเกิด Random ออกมาซ้ำ Faces กัน เช่น ครั้งแรกออก 3f1 ครั้งที่สองออก 4f1 ต้อง Downgrade ครั้งที่สองเป็น 3f1
        
        return ['3f1', '3f1', '5f2']
    }
    
    findLineForFaces(faces, winLines, precomputeLineCombinationResult) {
        // ไปจัดไลน์มาให้ลงตัวกับ Faces ที่ Random มา
        return [1, 3, 5]
    }
    
    makeDisplayFaces(resultFaces, resultLines, winLines) {
        return [
            //['f1', 'f1', 'f1', 'f0', 'f2'],
            //['f0', 'f1', 'f0', 'f2', 'f0'],
            //['f2', 'f2', 'f2', 'f0', 'f0']
            // Transpose ปรับให้เป็นแต่ละ Reel (Column)
            ['f1', 'f0', 'f2'],
            ['f1', 'f1', 'f2'],
            ['f1', 'f0', 'f2'],
            ['f0', 'f2', 'f0'],
            ['f2', 'f0', 'f0']
        ]
    }
    
}


module.exports = SlotAlgorithm
