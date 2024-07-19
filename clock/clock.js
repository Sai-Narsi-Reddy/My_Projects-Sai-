function DispTime() {
  let date = new Date();
  let disp = document.getElementById("h1");
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  disp.textContent = hours + ":" + minutes + ":" + seconds;
}
setInterval(DispTime, 1000);
