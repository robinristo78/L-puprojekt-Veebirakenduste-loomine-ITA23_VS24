function closePage() {
    // Sulge Tab ("vahekaart")
    window.open('', '_self').close();
    
    // Varuvõimalusena suunake ümber tühjale lehele või about:blank
    window.location.href = 'about:blank';
}

function showInfo(name, link) {
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');

    infoContent.innerHTML = '';
    
    // Set the content inside the element
    infoContent.innerHTML += `<h1 class="text-white" style="text-align: center;">${name}</h1> <br> <div style="width: 12rem;">`;

    infoContent.innerHTML += `<p class="bg-light flex p-3 text-black">Desc</p>`
    
    infoContent.innerHTML += `<div class="m-2" style="justify-content: center; text-align: center;"><a href="${link}" class="bg-primary bold" style="padding-left: 1rem; padding-right: 1rem; font-size: 40px;">PLAY</a></div>`;

    // Show the modal
    infoBox.classList.remove('hidden');
}

function closeInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.classList.add('hidden');
}