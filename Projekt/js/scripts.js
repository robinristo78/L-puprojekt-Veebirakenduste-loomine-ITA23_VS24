function closePage() {
    // Sulge Tab ("vahekaart")
    window.open('', '_self').close();
    
    // Varuvõimalusena suunake ümber tühjale lehele või about:blank
    window.location.href = 'about:blank';
}