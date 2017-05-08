
let slotRow = 3
let slotColumn = 3

let winLines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 3],
]

const faceReward = [
  [1, 3, 5],
  [2, 3, 10],
  [3, 3, 20],
  [4, 3, 30],
  [5, 3, 50],
  [6, 3, 100],
  [7, 3, 200],
  [8, 3, 500],
  [9, 3, 1000]
]

let precomputeLineCombinationSameFaceResult
function precomputeLineCombinationSameFace(winLines) { // Completed
  // หาความสัมพันธ์ว่าถ้า Faces เดียวกันแล้วใช้ Line นี้ เช่น '1,2,3' มีโอกาสจะได้ Line จริงๆ มากกว่านั้น รวมแล้วมี Line อะไรบ้าง
  // ทำคู่ 2 Line และ 3 Line
  precomputeLineCombinationResult = {
    '1,2,3': [1, 2, 3, 4, 6, 8],
    '1,2,4': [1, 2, 4, 10, 11],
    '1,2,5': [1, 2, 5, 7, 8, 11],
    '1,2': [1, 2],
    '1,3': [1, 3, 5],
    '1,4': [1, 4],
  }
}


////////////////////////////////////////////////////////////////////////////////

function randomNumLine() {
  return 3
}


function randomFaces(numLine) {
  // อาจจะต้อง Downgrade ถ้าเกิด Random ออกมาซ้ำ Faces กัน เช่น ครั้งแรกออก 3f1 ครั้งที่สองออก 4f1 ต้อง Downgrade ครั้งที่สองเป็น 3f1
  return ['3f1', '3f1', '5f2']
}

function findLineForFaces(faces, winLines, precomputeLineCombinationResult) {
  // ไปจัดไลน์มาให้ลงตัวกับ Faces ที่ Random มา
  return [1, 3, 5]
}

function makeDisplayFaces(resultFaces, resultLines, winLines) {
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

////////////////////////////////////////////////////////////////////////////////
// Usage
////////////////////////////////////////////////////////////////////////////////

let resultNumLine = randomNumLine()
let resultFaces = randomFaces(resultNumLine)
let resultLines = findLineForFaces(resultFaces, winLines, precomputeLineCombinationResult)

let displayFaces = makeDisplayFaces(resultFaces, resultLines, winLines)

console.log("Hello World\n")
