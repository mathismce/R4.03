import { startTimer, togglePause, stopTimer } from './js/timer.js';

window.onload = function () {
    const twoMinutes = 120;
    const display = document.querySelector('#timer');
    const playButton = document.querySelector('#play');
    const circle = document.querySelector('#timer-circle');
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
};
