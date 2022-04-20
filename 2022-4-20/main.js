// let menu = `아메리카노`;
// let menu__2 = `카페라떼`;
// let menu__3 = `사과주스`;
const menuAll = [`아메리카노`, `카페라떼`, `사과주스`];

// let price = 1500;
// let price__2 = 2500;
// let price__3 = 3000;
const priceAll = [1500, 2500, 3000];

// 아메리카노
// console.log(`손님 ${menu}는 ${price.toString()}원 입니다`);
// view(menu, price);

// 카페라떼
// console.log(`손님 ${menu__2}는 ${price__2.toString()}원 입니다`);
// view(menu__2, price__2);

// 사과주스
// console.log(`손님 ${menu__3}는 ${price__3.toString()}원 입니다`);
// view(menu__3, price__3);

for (let i = 0; i < menuAll.length; i++) {
  view(menuAll[i], priceAll[i]);
}

for (let [index, value] of menuAll.entries()) {
  view(value, priceAll[index]);
}

function view(menu, price) {
  console.log(`손님 ${menu}는 ${price.toString()}원 입니다`);
}
