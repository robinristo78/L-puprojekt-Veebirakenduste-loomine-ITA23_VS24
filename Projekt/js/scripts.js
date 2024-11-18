const game = {
    "id1": {
        name: "TIC TAC TOE", 
        link: "TICTACTOE.html",
        desc: `<span class="bold">Tic Tac Toe:</span><br><hr>
        Tic Tac Toe is a two-player strategy game played on a 3x3 grid.<br>
        Players take turns marking one empty square with their symbol: X or O.<br>
        The goal is to be the first to form a horizontal, vertical, or diagonal line of three of your symbols.<br>
        The game ends in a tie if all squares are filled without either player achieving this.<br>
        <br>
        <span class="bold">How to Play:</span><br><hr>
        Decide who plays as X and who as O.<br>
        Take turns clicking or marking a square to place your symbol.<br>
        Watch your opponent's moves and plan strategically to block them while setting up your win.<br>
        It's quick, fun, and sharpens your logic skills—perfect for all ages!`
    },
    "id2": {
        name: "Time Waster",
        link: "TIMEWASTER.html",
        desc: `<span class="bold">Time Waster:</span><br><hr>
        Time Waster is a slow-paced game designed to challenge your patience and willpower.<br>
        The game begins with a 20-second countdown timer, slowly ticking away.<br>
        Your goal is to keep resetting the timer to 20 seconds by clicking anywhere on the screen, extending your Time Played'.<br>
        <br>
        <span class="bold">How to Play:</span><br><hr>
        Stay calm and focused as the timer ticks down from 20 seconds.<br>
        Click anywhere on the page before the timer reaches zero to reset it and continue.<br>
        The 'Time Played' counter tracks how long you have been playing.<br>
        It is a game of endurance, patience, and mental strength to achieve the longest playtime!`
    }
};

function closePage() {
    // Sulge Tab ("vahekaart")
    window.open('', '_self').close();
    
    // Varuvõimalusena suunake ümber tühjale lehele või about:blank
    window.location.href = 'about:blank';
}

function showInfo(id) {
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');

    infoContent.innerHTML = '';
    
    // Set the content inside the element
    infoContent.innerHTML += `<h1 class="text-white" style="text-align: center; margin-bottom: 1.5rem;">${game[id].name}</h1>`;

    infoContent.innerHTML += `<div class="bg-light text-black p-2">${game[id].desc}</div>`;
    
    infoContent.innerHTML += `<div class="m-2" style="text-align: center;"><a href="${game[id].link}" id="play" class="bg-primary bold">PLAY</a></div>`;

    // Show the info box
    infoBox.style.display = 'block';
}

function closeInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none';
}

function toggleDropdown() {
    // Get the dropdown content element
    const dropdownContent = document.querySelector('.dropdown-content');
  
    // Toggle the display property
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';  // Hide the dropdown
    } else {
      dropdownContent.style.display = 'block'; // Show the dropdown
    }
  }