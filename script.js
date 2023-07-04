let currentPlayer = 'X';
let gameEnded = false;
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (gameEnded || board[index] !== '') {
    return;
  }

  board[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;

  if (checkWinner(currentPlayer)) {
    alert(currentPlayer + ' wins!');
    gameEnded = true;
  } else if (board.indexOf('') === -1) {
    alert('It\'s a draw!');
    gameEnded = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    if (board[combination[0]] === player && board[combination[1]] === player && board[combination[2]] === player) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  currentPlayer = 'X';
  gameEnded = false;
  board = ['', '', '', '', '', '', '', '', ''];
  
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
