//   1. 변수설정
const BTN = document.querySelectorAll("nav > .tap");
const PAGES = document.querySelectorAll("article > .main-page");
const H_PAGES = document.querySelectorAll("header > .main-page");

//   2. for문을 통해 main,header를 모두 안보이게 한다.
for (let i = 0; i < BTN.length; i++) {
  // 버튼에 click이벤트 시 원하는 함수가 호출되도록 한다.
  BTN[i].addEventListener("click", function () {
    const headerColor = ["red", "green", "blue", "orange"];
    const mainColor = ["black", "gray", "skyblue", "purple"];

    H_PAGES.forEach((elm) => {
      elm.style.display = "none";
    });
    PAGES.forEach((elm) => {
      elm.style.display = "none";
    });
    BTN.forEach((elm) => {
      elm.style.backgroundColor = "";
      elm.style.color = "";
    });
    //   3. 버튼을 클릭하면 버튼과 버튼의 index의 main, header에 색변화
    BTN[i].style.backgroundColor = mainColor[i];
    BTN[i].style.color = "white";

    H_PAGES[i].style.display = "block";
    H_PAGES[i].style.backgroundColor = headerColor[i];
    H_PAGES[i].style.color = "white";

    PAGES[i].style.display = "block";
    PAGES[i].style.backgroundColor = mainColor[i];
    PAGES[i].style.color = "white";
  });
}
//   4. 초기값을 설정한다
BTN[0].click();
