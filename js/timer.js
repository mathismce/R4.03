// timer.js

let timerInterval;

// Fonction pour démarrer le timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            stopTimer();
        }
    }, 1000);
}

// Fonction pour arrêter le timer
function stopTimer() {
    clearInterval(timerInterval);
    // Ajoutez ici des actions supplémentaires à exécuter lorsque le timer s'arrête, si nécessaire
}

export { startTimer, stopTimer };
