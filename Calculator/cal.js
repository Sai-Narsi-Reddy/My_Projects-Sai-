const disp = document.getElementById("h1");
const add = document.getElementById("box1");
const n_7 = document.getElementById("box2");
const n_8 = document.getElementById("box3");
const n_9 = document.getElementById("box4");
const sub = document.getElementById("box5");
const n_4 = document.getElementById("box6");
const n_5 = document.getElementById("box7");
const n_6 = document.getElementById("box8");
const mul = document.getElementById("box9");
const n_1 = document.getElementById("box10");
const n_2 = document.getElementById("box11");
const n_3 = document.getElementById("box12");
const div = document.getElementById("box13");
const n_0 = document.getElementById("box14");
const point = document.getElementById("box15");
const equal = document.getElementById("box16");
const clear = document.getElementById("box17");
let disp_elem = "";

function appendToDisplay(element) {
  disp_elem += element;
  disp.textContent = disp_elem;
}
clear.onclick = function () {
  disp.textContent = "0.00";
  disp_elem = "";
};
equal.onclick = function () {
  disp.textContent = eval(disp.textContent);
  disp_elem = disp.textContent;
};
