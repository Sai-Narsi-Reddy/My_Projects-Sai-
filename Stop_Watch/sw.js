const disp = document.getElementById("h1");
const b1 = document.getElementById("button1");
const b2 = document.getElementById("button2");
const b3 = document.getElementById("button3");
let date = new Date();
date.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

let intervalId;

function start_clock() {
  date.setSeconds(date.getSeconds() + 1); // Increment the time by one second
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  disp.textContent = hours + ":" + minutes + ":" + seconds;
}

b1.onclick = function () {
  if (!intervalId) {
    intervalId = setInterval(start_clock, 1000);
  }
};
b2.onclick = function () {
  clearInterval(intervalId);
  intervalId = null;
  date.setHours(0, 0, 0, 0); // Reset the time to 00:00:00
  disp.textContent = "00:00:00"; // Reset display
};
b3.onclick = function () {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId to allow restarting
};
