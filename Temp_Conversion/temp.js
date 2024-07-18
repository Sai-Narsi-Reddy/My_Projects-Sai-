const CtoF = document.getElementById("checkbox1");
const FtoC = document.getElementById("checkbox2");
const but = document.getElementById("button1");
const val = document.getElementById("conv");
let ans;

but.onclick = function () {
  if (CtoF.checked) {
    ans = val.value * (9 / 5) + 32;
    document.getElementById("h2").textContent = ans.toFixed(2);
  } else if (FtoC.checked) {
    ans = (5 / 9) * (val.value - 32);
    document.getElementById("h2").textContent = ans.toFixed(2);
  }
};
