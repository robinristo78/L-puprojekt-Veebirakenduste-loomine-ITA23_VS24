const countdownElement = document.getElementById('countdown');
const timePlayedElement = document.getElementById('timePlayed');
const progressCircle = document.getElementById('progress');
const personalBestElement = document.getElementById('personalBest');

let countdownTime = 20; // Countdown timer starts at 20 seconds
let timePlayed = 0; // Time played counter
let gameOver = false; // Track whether the game is over
let countdownInterval, playedInterval;

// Function to update the countdown timer
function updateCountdown() {
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        clearInterval(playedInterval);
        handleGameOver();
        return;
    }
    countdownTime -= 0.1; // Decrease timer by 0.1 second
    countdownElement.textContent = countdownTime.toFixed(1);
    updateProgressCircle();
}

// Function to update the progress circle
function updateProgressCircle() {
    const progress = (countdownTime / 20) * 283; // Calculate circle's stroke-dashoffset
    progressCircle.style.strokeDashoffset = progress; // Progress goes in reverse
}

// Function to update time played
function updateTimePlayed() {
    timePlayed += 0.1; // Increment timer
    timePlayedElement.textContent = timePlayed.toFixed(1);
}

// Handle game over logic
function handleGameOver() {
    gameOver = true;
    checkAndUpdatePersonalBest(timePlayed);
}

// Function to reset the countdown time
function resetCountdown() {
    countdownTime = 20; // Reset countdown
    updateProgressCircle();
    countdownElement.textContent = countdownTime.toFixed(1); // Update display
}

// Function to fully reset the game
function resetGame() {
    clearInterval(countdownInterval);
    clearInterval(playedInterval);
    countdownTime = 20; // Reset countdown
    timePlayed = 0; // Reset time played
    gameOver = false; // Reset game state
    updateProgressCircle();
    timePlayedElement.textContent = timePlayed.toFixed(1); // Reset display
    countdownElement.textContent = countdownTime.toFixed(1); // Reset display
    startGame();
}

// Function to get the personal best from localStorage
function getPersonalBest() {
    return parseFloat(localStorage.getItem('personalBest')) || 0;
}

// Function to save the personal best to localStorage
function setPersonalBest(score) {
    localStorage.setItem('personalBest', score.toFixed(1));
}

// Function to update the personal best on the webpage
function updatePersonalBestDisplay() {
    const personalBest = getPersonalBest();
    personalBestElement.textContent = personalBest.toFixed(1);
}

// Function to check and update the personal best
function checkAndUpdatePersonalBest(currentTimePlayed) {
    const personalBest = getPersonalBest();
    if (currentTimePlayed > personalBest) {
        setPersonalBest(currentTimePlayed);
        updatePersonalBestDisplay();
    }
}

// Start the game
function startGame() {
    countdownInterval = setInterval(updateCountdown, 100); // Countdown updates every 100ms
    playedInterval = setInterval(updateTimePlayed, 100); // Time played updates every 100ms
}

// Event listener to handle clicks
document.body.addEventListener('click', () => {
    if (gameOver) {
        resetGame(); // Restart game after game over
    } else {
        resetCountdown(); // Reset countdown during gameplay
    }
});

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    updatePersonalBestDisplay(); // Display personal best on page load
    startGame();
});
