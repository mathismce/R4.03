let countEl;
let circleEl;
const endTimer = 10;
let count = endTimer;
let isPaused = false;
let interval;


const init = () => {
  countEl = document.querySelector("#countdown");
  circleEl = document.querySelector("#timer-circle");

  countEl.textContent = getCountToMin(count);

  // Initialize event listeners for buttons
  let play = document.querySelector("#play");
  let stop = document.querySelector("#stop");
  play.addEventListener("click", toggleTimer);
  stop.addEventListener("click", stopTimer);
  interval = setInterval(updateTimer, 1000);
};

const getCountToMin = (sec) => {
  let min = Math.floor(sec / 60);
  let remainingSec = sec % 60;

  const minStr = min < 10 ? `0${min}` : min;
  const secStr = remainingSec < 10 ? `0${remainingSec}` : remainingSec;

  return `${minStr}:${secStr}`;
};


const toggleTimer = () => {
  console.log("Bouton play/pause cliqué.");
  isPaused = !isPaused;
  console.log("isPaused:", isPaused); // Vérifie la valeur de isPaused
  const playButton = document.getElementById("play");
  playButton.textContent = isPaused ? "play" : "pause";

  circleEl.style.animationPlayState = "paused";
  
};


const stopTimer = () => {
  // Stop the timer and reset count
  clearInterval(interval);
  count = endTimer;
  countEl.textContent = getCountToMin(count);
  isPaused = false;
  document.getElementById("play").textContent = "play"; // Reset play button text

  // Relance le timer en appelant init()
  init();
};

const updateTimer = () => {
  if (!isPaused) {
    if (count > 0) {
      count--;
      countEl.textContent = getCountToMin(count);
    } else {
      // Reset the timer
      count = endTimer; // Reset count to its initial value
    }
  }
};

