"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btns = document.querySelectorAll(".show-modal");
console.log(btns);

for (let i = 0; i < btns.length; i++)
  btns[i].addEventListener("click", function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModel.addEventListener("click", closeModel());
overlay.addEventListener("click", closeModel());
