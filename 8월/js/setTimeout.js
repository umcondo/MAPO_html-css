const arr = [7, 1, 4, 3, 2];
for (const elem of arr) {
  setTimeout(() => console.log(elem), elem);
}
const box = [1, 33, 55, 21];
for (let i = 0; i < box.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

// 결과가 3 3 3 3인줄 알고 있었는데 0 1 2 3이었다. 비동기 개념이 잘못되어있었다.
// 당연히 3초 후에 0 1 2 3이 출력되는 것인데
// 클로저랑 비동기 여러가지 보면서 개념이 섞인 것 같다....
