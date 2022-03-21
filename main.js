"use strict";

let a = document.querySelector(".num1");
let b = document.querySelector(".num2");
let c = document.querySelector(".num3");

let followTotal = 0;
function sana() {
  followTotal++;
  if (followTotal > 1199) {
    clearInterval(aa);
  }
  a.innerHTML = followTotal + "0";
}
let aa = setInterval(sana);

let followTotal2 = 0;
function sana2() {
  followTotal2++;
  if (followTotal2 > 499) {
    clearInterval(bb);
  }
  b.innerHTML = followTotal2 + "0";
}
let bb = setInterval(sana2);

function sana3() {
  followTotal++;
  if (followTotal > 749) {
    clearInterval(cc);
  }
  c.innerHTML = followTotal + "0";
}
let cc = setInterval(sana3);
