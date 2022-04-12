// console.log(document.querySelector(".menuButton"));
// console.log(document.querySelectorAll(".orderedMenu"));
// console.log(document.querySelector("input"));

let menuButton = document.querySelector(".menuButton");

let input = document.querySelector("input");
let orderText = document.querySelector(".orderText");
let orderText2 = document.querySelector(".orderText2");
let menuAdvice = document.querySelector(".menuAdvice");
let adviceText = document.getElementById("adviceText");

const menu = ["치즈와퍼", "불고기와퍼", "새우버거", "치킨버거", "베이컨와퍼"];

menuAdvice.addEventListener("click", () => {
  adviceText.style.display = "block";
});

menuButton.addEventListener("click", () => {
  //   let value = input.value.split(" ").join("");
  let value = input.value.replace(/\s/gi, "");
  if (value) {
    orderText.style.display = "block";
    orderText2.style.display = "none";
    if (menu.includes(value)) {
      document.querySelector(
        "div.orderText > p:nth-child(2)"
      ).innerHTML = `네~ 손님~~ <span class='orderedMenu'>${value}</span> 준비해드릴께요 ^^`;
    } else {
      document.querySelector(
        "div.orderText > p:nth-child(2)"
      ).innerHTML = `손님~~ <span class='orderedMenu'>${value}</span> 는 없는 메뉴에요 ㅠㅠㅠㅠ`;
    }
    let orderedMenu = document.querySelectorAll(".orderedMenu");
    orderedMenu.forEach((elm) => {
      elm.innerText = value;
      //   elm.style.color = "orange";
    });
  } else {
    orderText.style.display = "none";
    orderText2.style.display = "block";
    orderText2.innerHTML = "주문할 메뉴를 입력하세요";
    orderText2.style.color = "red";
    orderText2.style.margin = "20px 0";
  }
});
