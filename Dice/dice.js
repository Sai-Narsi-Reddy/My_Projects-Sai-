const No_of_Dices = document.getElementById("dice");
const button = document.getElementById("button1");
let num;
let ans = [];
button.onclick = function () {
  for (let i = 0; i < No_of_Dices.value; i++) {
    num = Math.random() * 6 + 1;
    ans[i] = Math.floor(num);
  }
  document.getElementById("p1").textContent = ans;
};
