let g = 0;

// 비동기 함수 내부에서 비동기적으로 처리되는 코드는 함수가 종료된 이후에 완료된다.
// 비동기 함수 내부에서 상위 스코프 변수에 처리 결과를 할당하면 기대한 대로 동작하지 않는다.

setTimeout(() => {
  g = 100;
}, 0);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
console.log(g);
