var timeEl = document.querySelector("#time");

//keeping score variable
var keepScore = 0;
//time deduction is going to be -5 seconds
var timeDeduct = 5;
//timer will start at 75 seconds
var timeIntervalStart = 75;
timeEl.innerHTML = "Time: " + timeIntervalStart;

//defining the countdown function
var timeInterval = setInterval(() => {
  timeEl.innerHTML = "Time: " + timeIntervalStart--;
  if (timeIntervalStart === -1) {
    clearInterval(timeInterval);
    console.log("Time's up, here's your score: " + keepScore);
  }
}, 1000);
