"use strict";

// 변수가 아무것도 참조하지 않을때 변수가 가지고 있는 default값
let booking;
console.log("booking : ", booking);

let booking2 = 0;
console.log("booking2 : ", booking2);

let booking3 = -1;
console.log("booking3 : ", booking3);

// 변수에 아무것도 넣고싶지 않을때 null을 임의로 지정
let booking4 = null;
console.log("booking4 :", booking4);

let booking5 = "";
console.log("booking5 : ", booking5);

// 변수에 undefined를 할당할 수도 있지만 이는 좋지않다. null을 사용해야한다.
let booking6 = undefined;
console.log("booking6 :", booking6);

// 옵션값 모두 가져옴
const selectBox = document.getElementById("menu-select");
const select = document.querySelector("select");
// console.log(select);

for (let i = 0; i < cafeMenu.length; i++) {
  //   const select = document.createElement("option");
  //   selectBox.appendChild(select);
  //   select.innerText = cafeMenu[i].menu;

  select.options[i] = new Option(cafeMenu[i].menu, i);
}
// console.log(select.options[1]);
// console.log(document.querySelector("select").options);

function priceHow() {
  //   console.log(document.querySelector("select"));
  let idx = document.querySelector("select").selectedIndex;

  let menu = cafeMenu[idx].menu;
  let price = cafeMenu[idx].price;

  question.innerText = `${menu}는 얼마인가요??`;
  answer.innerText = `${menu}는 ${price}원입니다`;
}
