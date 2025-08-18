// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Som do clique
    const clicksound = new Audio('./assets/sounds/clicksound.wav');
    
    function tocarSom() {
        clicksound.currentTime = 0;
        clicksound.play();
    }
    
    document.addEventListener('click', tocarSom);
});