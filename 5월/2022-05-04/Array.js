/* 배열은 순서가 있는 자료를 저장하기 위한 자료구조다. */

const drink = ["소주", "고량주", "맥주", "와인"];

// console.log(drink.shift());
// console.log(drink);

// 큐 - 배열을 이용해 만든다. 한쪽으로 넣으면 다른쪽으로 뺀다 (선입 선출)
// shift() , push() 이용
// 인쇄기 대기 시스템, 식단배식 시스템

// 스택 - 배열을 이용해 만든다. 한쪽으로 넣고 그쪽으로 뺀다 (후입 선출)
// javascript 엔진

// push('elm')와 Array[Array.length] = 'elm' 은 같은 효과다.

// unshift 배열 앞에 요소 추가

// console.log(drink);
drink.unshift("데킬라");
// console.log(drink);

// 배열은 객체다.

let fruits = ["바나나"];

let arr = fruits; // fruits와 arr은 같은 객체를 참조

console.log(arr === fruits); // === 은 값과 데이터타입을 모두 비교 , == 은 값만 비교하므로 형변환이 일어난다.

arr.push("배"); // 참조로 배열변환

console.log({ arr, fruits }); // 같은 객체를 참조하고 있으므로 두 변수 모두 바뀜

// 배열의 특성

let unknownArray = [];
unknownArray[0] = 1;
unknownArray[999] = 99999;
// console.log(unknownArray);

let unknownArray2 = [];
unknownArray2[0] = 0;
unknownArray2[1] = 1;

// console.time();
// unknownArray.forEach((elm) => console.log(elm));
// console.timeEnd();

// console.time();
// for (let i = 0; i < unknownArray.length; i++) {
//   console.log(unknownArray[i]);
// }
// console.timeEnd();

// console.time();
// unknownArray2.forEach((elm) => console.log(elm));
// console.timeEnd();

// shift는 pop보다 느리다
// unshift는 push보다 느리다

// let array3 = ["a", "b", "c", "d"];
// console.time();
// // array3.shift();
// array3.unshift();
// console.timeEnd();
// array3 = ["a", "b", "c", "d"];
// console.time();
// // array3.pop();
// array3.push("e");
// console.timeEnd();

// let array3 = [];
// array3[0] = 1;
// array3[10] = 10;

// console.time();
// array3.forEach((elm) => console.log(elm));
// console.timeEnd();

// console.time();
// for (let i = 0; i < array3.length; i++) {
//   console.log(array3[i]);
// }
// console.timeEnd();

// console.time();
// for (elm of array3) {
//   console.log(elm);
// }
// console.timeEnd();

//배열 자르기

// let array4 = [1, 2, 3, 4, 5, 6, 7];
// array4.length = 3;
// console.log(array4);

// // 배열 문자열

// let array5 = ["z", "y", "w"];
// console.log(String(array5));

// sumInput();
// const numArray = [];

// function sumInput() {
//   let num = number();
//   numArray.push();

//   if (typeof num !== number) {
//     return numArray.reduce((acc, cur) => {
//       acc, acc + cur, 0;
//     });
//   }

//   return sumInput();
// }

// function number() {
//   window.prompt("숫자를 입력해주세요");
// }

function getMaxSubSum(arr) {
  let sumBox = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        sumBox.push(sum);
      }
    }
  }
  if (Math.max(...sumBox) <= 0) {
    return 0;
  }
  return Math.max(...sumBox);
}
console.log(getMaxSubSum([-1, -2, -3]));

function getMaxSubSum(arr) {
  let sumMax = 0;
  let partialSum = 0;
  for (elm of arr) {
    partialSum += elm;
    sumMax = Math.max(sumMax, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return sumMax;
}
