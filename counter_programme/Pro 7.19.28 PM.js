const inc = document.getElementById("button1");
const res = document.getElementById("button2");
const dec = document.getElementById("button3");
const Ans = document.getElementById("p1");
let sum = 0;
inc.onclick = function () {
  sum += 1;
  Ans.textContent = sum;
};
res.onclick = function () {
  sum = 0;
  Ans.textContent = sum;
};
dec.onclick = function () {
  sum -= 1;
  Ans.textContent = sum;
};
