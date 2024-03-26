// let timerInterval;
// let timerPaused = false;


// let circle = document.querySelector("#timer-circle")


// // Fonction pour démarrer le timer
// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     timerInterval = setInterval(function () {
//         if (!timerPaused) {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);

//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;

//             display.textContent = minutes + ":" + seconds;
//             circle.style.animationStatePlay = "running"
//             if (--timer < 0) {
//                 stopTimer();
//             }
//         }
//     }, 1000);
// }

// function togglePause() {
//     timerPaused = !timerPaused;
//     circle.style.animationPlayState = timerPaused ? "paused" : "running";
    

// }

// // Fonction pour arrêter le timer
// function stopTimer() {
//     clearInterval(timerInterval);
//     timerPaused = false; // Remettre le timer en mode non-pausé
//     display.textContent = "02:00"; // Réinitialiser l'affichage du compte à rebours à "00:00"
//     circle.style.animationPlayState = "paused"; // Mettre en pause l'animation du cercle
// }

// export { startTimer, stopTimer, togglePause};


let timerInterval;
let timerPaused = false;
let circle = document.querySelector("#timer-circle");

// Fonction pour démarrer le timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        if (!timerPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
            circle.style.animationPlayState = "running";
            if (--timer < 0) {
                stopTimer(display);
            }
        }
    }, 1000);
}

// Fonction pour mettre en pause ou reprendre le timer
function togglePause() {
    timerPaused = !timerPaused;
    circle.style.animationPlayState = timerPaused ? "paused" : "running";
}

// Fonction pour arrêter le timer
function stopTimer(display) {
    clearInterval(timerInterval);
    timerPaused = false; // Remettre le timer en mode non-pausé
    display.textContent = "02:00"; // Réinitialiser l'affichage du compte à rebours à "02:00"
    window.location.reload();
}

window.onload = function () {
    const twoMinutes = 120;
    const display = document.querySelector('#timer');
    const playButton = document.querySelector('#play');
    const stopButton = document.querySelector('#stop');
    let isTimerRunning = false;

    playButton.addEventListener('click', function () {
        if (!isTimerRunning) {
            startTimer(twoMinutes, display);
            isTimerRunning = true;
            circle.style.animationPlayState = "running";
            playButton.querySelector('img').setAttribute('src', './assets/play.svg');
            playButton.querySelector('img').setAttribute('alt', 'play');
        } else {
            togglePause();
            if (playButton.querySelector('img').alt === 'pause') {
                playButton.querySelector('img').setAttribute('src', './assets/play.svg');
                playButton.querySelector('img').setAttribute('alt', 'play');
            } else {
                playButton.querySelector('img').setAttribute('src', './assets/pause.svg');
                playButton.querySelector('img').setAttribute('alt', 'pause');
            }
        }
    });

    stopButton.addEventListener('click', function () {
        stopTimer(display);
        isTimerRunning = false;
    });
};
