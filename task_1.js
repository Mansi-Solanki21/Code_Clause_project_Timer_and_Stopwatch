var timerInterval;
var stopwatchInterval;
var timerSeconds = 0;
var stopwatchSeconds = 0;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerSeconds++;
  var hours = Math.floor(timerSeconds / 3600);
  var minutes = Math.floor((timerSeconds % 3600) / 60);
  var seconds = timerSeconds % 60;
  document.getElementById("timer-display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  document.getElementById("timer-display").textContent = "00:00:00";
}

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
  stopwatchSeconds++;
  var hours = Math.floor(stopwatchSeconds / 3600);
  var minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  var seconds = stopwatchSeconds % 60;
  document.getElementById("stopwatch-display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  document.getElementById("stopwatch-display").textContent = "00:00:00";
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}