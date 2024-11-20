let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let vsComputer = false; // Tracks if "vs. Computer" mode is active

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("gameStatus").innerHTML = `Player ${currentPlayer}'s turn`;

  if (vsComputer && currentPlayer === "O") {
    setTimeout(computerMove, 500); // Delay for a more natural effect
    disableCellClicks(); // Disable cell clicks during computer's turn
  } else {
    enableCellClicks(); // Re-enable clicks when it's the player's turn
  }
}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") continue;
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    document.getElementById("gameStatus").innerHTML = `Player ${currentPlayer} has won!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    document.getElementById("gameStatus").innerHTML = "Game ended in a draw!";
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

  if (gameState[clickedCellIndex] !== "" || !gameActive) return;

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

// Handle the computer's move
function computerMove() {
  if (!gameActive) return; // Stop if the game is over

  // Find indices of empty cells
  let availableCells = gameState
    .map((cell, index) => (cell === "" ? index : null))
    .filter(index => index !== null);

  if (availableCells.length > 0) {
    // Check for potential winning conditions
    let potentialMoves = [];

    for (let condition of winningConditions) {
      let cells = condition.map(index => gameState[index]);
      let emptyCount = cells.filter(cell => cell === "").length;
      let computerCount = cells.filter(cell => cell === "O").length;

      // If the computer can move towards a win (line with "O" and empty spaces)
      if (emptyCount > 0 && computerCount > 0 && emptyCount + computerCount === 3) {
        potentialMoves.push(...condition.filter(index => gameState[index] === ""));
      }
    }

    // Prioritize strategic moves, or fall back to random if none exist
    let moveIndex;
    if (potentialMoves.length > 0) {
      moveIndex = potentialMoves[Math.floor(Math.random() * potentialMoves.length)];
    } else {
      moveIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    }

    // Make the move
    const cell = document.querySelector(`[data-cell-index='${moveIndex}']`);
    handleCellPlayed(cell, moveIndex);
    handleResultValidation();
  }
}

// Disable cell clicks during the computer's turn
function disableCellClicks() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.removeEventListener("click", handleCellClick); // Disable click event
  });
}

// Enable cell clicks after the computer's turn
function enableCellClicks() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick); // Enable click event
  });
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("gameStatus").innerHTML = "Player X's turn";
  document.querySelectorAll(".cell").forEach(cell => (cell.innerHTML = ""));
  enableCellClicks(); // Enable cell clicks at the start of a new game
}

// Toggle "vs. Computer" mode
document.getElementById("vsComputerToggle").addEventListener("click", () => {
  vsComputer = !vsComputer;
  document.getElementById("vsComputerToggle").innerHTML = vsComputer 
      ? "Playing vs. Computer" 
      : "Play vs. Computer";
  resetGame(); // Restart the game when toggling
});

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  gameState.forEach((_, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-cell-index", index);
    cell.addEventListener("click", handleCellClick);
    gameBoard.appendChild(cell);
  });
});
