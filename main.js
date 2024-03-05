
import { startTimer } from './js/timer.js';


window.onload = function () {
    const twoMinutes = 120, 
          display = document.querySelector('#timer'); 

    startTimer(twoMinutes, display);
};
