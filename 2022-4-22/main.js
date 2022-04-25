const cafeMenu = [
  { menu: "민트초코", price: 5000 },
  { menu: "바닐라라떼", price: 4500 },
  { menu: "아메리카노", price: 2000 },
];
// console.log(cafeMenu);
// console.log(cafeMenu.메뉴);
// console.log(cafeMenu.가격);

const question = document.querySelector("h1");
const answer = document.querySelector("h2");

// 버튼에 이벤트 리스너 달기
document.querySelector("button").addEventListener("click", () => {
  // 입력값
  const idx = document.querySelector("input").value;

  // 메뉴 초기화
  question.innerText = "";
  answer.innerText = "";

  // 예외처리 0~2 숫자만 (값이 없거나 -1 < idx < 3이면 alert!!)
  if (!idx || !(idx < cafeMenu.length && idx > -1)) {
    question.innerText = `0 ~ 2 숫자를 입력해주세요 !!`;
    return alert("0 ~ 2 숫자를 입력해주세요");
  }

  // 인덱스의 메뉴, 가격
  const menuName = cafeMenu[idx].menu;
  const priceValue = cafeMenu[idx].price;

  // 같은 인덱스의 메뉴 출력
  question.innerText = `${menuName} 는 얼마인가요?`;

  // 같은 인덱스의 가격 1초 후 출력
  setTimeout(() => {
    answer.innerText = `${menuName} 는 ${priceValue}원 입니다.`;
  }, 1000);
});
