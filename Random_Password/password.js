const btn = document.getElementById("button1");
const sol = document.getElementById("p1");
const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small_letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special_char = "!@#$%^&*()";
const max_length = 15;
const min_length = 6;
let pass = [];
let ans;

let is_cap = true;
let is_lower = true;
let is_num = true;
let is_sp = true;
let length = Math.ceil(Math.random() * (max_length - min_length) + min_length);
let allow = "";

btn.onclick = function () {
  if (is_cap) {
    allow = capital_letters;
  }
  if (is_lower) {
    allow = allow.concat(small_letters);
  }
  if (is_num) {
    allow = allow.concat(numbers);
  }
  if (is_sp) {
    allow = allow.concat(special_char);
  }
  total_length = allow.length;
  console.log(total_length);
  for (let i = 0; i < length; i++) {
    num = Math.floor(Math.random() * total_length);
    pass[i] = allow.charAt(num);
  }
  console.log(length);
  console.log(allow);
  ans = pass.join("");
  sol.textContent = ans;
};
