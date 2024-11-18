function closePage() {
    // Try to close the current tab
    window.open('', '_self').close();
    
    // If not possible, redirect to a blank page
    window.location.href = 'about:blank';
}

function showInfo(id) {
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');

    const game = {
        "id1": {
            name: "TIC TAC TOE", 
            link: "TICTACTOE.html",
            desc: `<span class="bold">Tic Tac Toe: How to Play</span><br><hr>
            Tic Tac Toe is a two-player strategy game played on a 3x3 grid. Players take turns marking one empty square with their symbol: X or O. The goal is to be the first to form a horizontal, vertical, or diagonal line of three of your symbols. The game ends in a tie if all squares are filled without either player achieving this.<br><br>
            To play:<br>
            Decide who plays as X and who as O.<br>
            Take turns clicking or marking a square to place your symbol.<br>
            Watch your opponent's moves and plan strategically to block them while setting up your win.<br>
            It's quick, fun, and sharpens your logic skills—perfect for all ages!`
        },
        "id2": {
            name: "Time Waster",
            link: "TICTACTOE.html", // Update this URL when you add a real game for 'Time Waster'
            desc: "A fun game for wasting time, no skills required!"
        }
    };

    // Clear the existing content
    infoContent.innerHTML = '';

    // Set the content dynamically based on the selected game ID
    infoContent.innerHTML += `<h1 class="text-white" style="text-align: center;">${game[id].name}</h1><br>`;
    infoContent.innerHTML += `<p class="text-white">${game[id].desc}</p>`;
    infoContent.innerHTML += `<div class="m-2" style="text-align: center;">
        <a href="${game[id].link}" class="bg-primary bold" style="padding-left: 1rem; padding-right: 1rem; font-size: 40px;">PLAY</a>
    </div>`;

    // Show the modal with game information
    infoBox.classList.remove('hidden');
}

function closeInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.classList.add('hidden');
}
