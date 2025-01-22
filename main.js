// main.js

// Aggiungi l'event listener per il pulsante
document.getElementById('fixedButton').addEventListener('click', function() {
    // Mostra la GIF
    document.getElementById('gifContainer').style.display = 'flex';
    // Riproduci il suono
    var audio = document.getElementById('audio');
    audio.play();

    // Imposta un timeout per la durata della GIF e del suono
    var gifDuration = 4000; // Durata della GIF in millisecondi (4 secondi)
    var audioDuration = audio.duration * 1000; // Durata del suono in millisecondi

    // Usa il tempo minore tra GIF e suono
    var totalDuration = Math.min(gifDuration, audioDuration);

    // Ricarica la pagina dopo la durata totale
    setTimeout(function() {
        location.reload();
    }, totalDuration);
});

// Carica MathJax
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
script.async = true;
document.head.appendChild(script);
