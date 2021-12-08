"use strict";

const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btns = document.querySelectorAll(".show-modal");
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  console.log(btns[i].textContent);
}
