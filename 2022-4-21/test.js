const menu = ["민트초코", "바닐라라떼", "아메리카노", "녹차라떼"];
const price = [5000, 4500, 2000];

// const printMenu = () => {
//   for (let i = 0; i < menu.length; i++) {
//     console.log(`손님 ~ ${menu[i]} 는 ${price[i].toString()} 원 입니다.`);
//   }
// };

// printMenu();

// // const Plusprice = () => {
// //   let calc = price[1] + price[2];
// //   return calc;
// // };

// // console.log(calc);

// function plusPrice(num1, num2) {
//   return num1 + num2;
// }
// let calc = plusPrice(1000, 2000);

// // console.log(calc);

// 객체 생성
const cafeMenu = { menu: `민트초코`, price: 5000 };
console.log(`menu:`, cafeMenu.menu, `price:`, cafeMenu.price);

const dog = {
  name: `설`,
  age: 9,
  species: `요크셔테리어`,
  색깔: `실버`,
  스킬: `구르기`,
  action() {
    console.log("빵야");
  },
  action2(text) {
    console.log(text);
  },
  action3: function () {
    console.log("zz");
  },
};

// console.log(Object.keys(dog)[0]);
// console.log(Object.keys(dog));
// console.log(Object.values(dog));
// dog.action2("죽은척");
// dog.action3();
// console.log("🤣😂😂)}(╯°□°）╯︵ ┻━┻ಥ_ಥ");

const 강대국 = {
  이름: "강대국",
  거주: "서울",
  좋아하는것: "여행",
  좋아하는술: ["막걸리", "와인"],
  공부하는것: "javascript",
  이모지: function () {
    console.log(`👍👍👍👍👍👍👍👍`);
  },
};

console.log(강대국);
강대국.이모지();
console.log(강대국.좋아하는술[1]);

console.log(JSON.stringify(강대국));
console.log(JSON.parse(JSON.stringify(강대국)));
