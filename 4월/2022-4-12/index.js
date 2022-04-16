// console.log(document.querySelector(".menuButton"));
// console.log(document.querySelectorAll(".orderedMenu"));
// console.log(document.querySelector("input"));

const menu = ["치즈와퍼", "불고기와퍼", "새우버거", "치킨버거", "베이컨와퍼"];

// 변수선언
let menuAdvice = document.querySelector(".menuAdvice");
let adviceText = document.querySelector(".adviceText");

menuAdvice.addEventListener("click", () => {
  adviceText.innerHTML = `오늘의 추천 메뉴는 <span style="color:red">치킨버거</span> 입니다.`;
});

// 변수선언
let menuButton = document.querySelector(".menuButton");
let input = document.querySelector("input[type=text]");
let orderText = document.querySelector(".orderText");
let orderText2 = document.querySelector(".orderText2");

menuButton.addEventListener("click", () => {
  let value = input.value.replace(/\s/gi, ""); //정규화로 입력받은 값 내의 공백을 모두 제거함

  // 텍스트 초기화
  orderText.innerHTML = "";
  orderText2.innerHTML = "";

  if (!value) {
    // 값을 입력받지 않았을 때
    orderText.innerHTML = `<p style=color:red>주문할 메뉴를 입력하세요</p>`;
  } else {
    // 값을 입력받았을 때
    orderText.innerHTML = `음~~ <span style=color:orange>${input.value}</span> 주세요.`;

    /* include 이용 */
    if (menu.includes(value)) {
      // 입력받은 값이 메뉴에 있다면
      orderText2.innerHTML = `네~ 손님~~ <span style=color:orange>${input.value}</span> 준비해드릴께요 ^^`;
    } else {
      //입력받은 값이 메뉴에 없다면
      orderText2.innerHTML = `손님~~ <span style=color:orange>${input.value}</span> 는 없는 메뉴에요 ㅠㅠㅠㅠ`;
    }

    /* for문 이용 */
    // 입력받은 값이 메뉴에 없다면
    // orderText2.innerHTML = `손님~~ <span style=color:orange>${input.value}</span> 는 없는 메뉴에요 ㅠㅠㅠㅠ`;

    // // 입력받은 값이 메뉴에 있다면
    // for (let i = 0; i < menu.length; i++) {
    //   if (menu[i] === value) {
    //     orderText2.innerHTML = `네~ 손님~~ <span style=color:orange>${input.value}</span> 준비해드릴께요 ^^`;
    //     break; //값이 있다면 바로 for문을 중단
    //   }
    // }

    /* forEach 이용 */
    // 입력받은 값이 메뉴에 없다면
    // orderText2.innerHTML = `손님~~ <span style=color:orange>${input.value}</span> 는 없는 메뉴에요 ㅠㅠㅠㅠ`;

    // menu.forEach(
    //   some((elm, index) => {
    //     if (elm === value) {
    //       (orderText2.innerHTML = `네~ 손님~~ <span style=color:orange>${input.value}</span> 준비해드릴께요 ^^`);
    //       //값이 있다면 바로 forEach를 중단
    //     }
    //   })
    // );
  }
});

/* ============================================코드 고치기 전 ================================================ */

// menuButton.addEventListener("click", () => {
//   //   let value = input.value.split(" ").join("");
//   let value = input.value.replace(/\s/gi, "");
//   if (value) {
//     orderText.style.display = "block";
//     orderText2.style.display = "none";
//     if (menu.includes(value)) {
//       document.querySelector(
//         "div.orderText > p:nth-child(2)"
//       ).innerHTML = `네~ 손님~~ <span class='orderedMenu'>${value}</span> 준비해드릴께요 ^^`;
//     } else {
//       document.querySelector(
//         "div.orderText > p:nth-child(2)"
//       ).innerHTML = `손님~~ <span class='orderedMenu'>${value}</span> 는 없는 메뉴에요 ㅠㅠㅠㅠ`;
//     }
//     let orderedMenu = document.querySelectorAll(".orderedMenu");
//     orderedMenu.forEach((elm) => {
//       elm.innerText = value;
//       //   elm.style.color = "orange";
//     });
//   } else {
//     orderText.style.display = "none";
//     orderText2.style.display = "block";
//     orderText2.innerHTML = "주문할 메뉴를 입력하세요";
//     orderText2.style.color = "red";
//     orderText2.style.margin = "20px 0";
//   }
// });
