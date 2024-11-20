const countdownElement = document.getElementById('countdown');
const timePlayedElement = document.getElementById('timePlayed');
const progressCircle = document.getElementById('progress');
const gameOverMessage = document.getElementById('gameOver');
const personalBestElement = document.getElementById('personalBest');

let countdownTime = 20; // Countdown timer starts at 20 seconds
let timePlayed = 0; // Time played counter
let countdownInterval, playedInterval;

// Function to update the countdown timer
function updateCountdown() {
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        clearInterval(playedInterval);
        gameOver();
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

// Reset the game
function resetGame() {
    if (countdownTime <= 0) return; // Don't reset after game over
    countdownTime = 20;
    timePlayed = 0;
    updateProgressCircle();
    timePlayedElement.textContent = timePlayed.toFixed(1);
    gameOverMessage.style.display = 'none';
}

// Game over handler
function gameOver() {
    gameOverMessage.style.display = 'block';
    checkAndUpdatePersonalBest(timePlayed);
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
        alert("Congratulations! New Personal Best: " + currentTimePlayed.toFixed(1) + " seconds");
    }
}

// Start the game
function startGame() {
    countdownInterval = setInterval(updateCountdown, 100); // Countdown updates every 100ms
    playedInterval = setInterval(updateTimePlayed, 100); // Time played updates every 100ms
}

// Event listener to reset the countdown timer
document.body.addEventListener('click', resetGame);

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    updatePersonalBestDisplay(); // Display personal best on page load
    startGame();
});
