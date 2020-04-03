function generateBoard(a, b) {
  let board = []
  for (let y = 0; y < 8; y++) {
    let row = []
    for (let x = 0; x < 8; x++) {
      if (y === a[0] && x === a[1] || y === b[0] && x === b[1]) {
        row.push(1)
      } else {
        row.push(0)
      }
    }
    board.push(row)
  }
  return board
}

function queenThreat(board) {
  let queens = []
  for (let y in board) {
    for (let x in board[y]) {
      if (board[y][x] === 1) {
        queens.push([y, x])
      }
    }
  }

  // vertical and horizontal 
  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]) {
    return true
  }

  // diagonal
  const run = queens[1][0] - queens[0][0]
  const rise = queens[1][1] - queens[0][1]
  const ratio = rise / run

  return ratio === 1 || ratio === -1
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
console.log(queenThreat(generatedBoard));