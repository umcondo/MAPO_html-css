// for문 이용
function sumTo(n) {
  let answer = 0;
  for (let i = 1; i < n + 1; i++) {
    answer += i;
  }
  return answer;
}
console.time();
console.log(sumTo(100));
console.timeEnd();

// 재귀이용
function sumTo2(n) {
  if (n === 1) {
    return 1;
  } else if (n > 1) {
    return sumTo2(n - 1) + n;
  }
}
console.time();
console.log(sumTo2(100));
console.timeEnd();
// sumTo2(100000);
// 등차수열 공식

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}
console.time();
console.log(sumTo3(100));
console.timeEnd();
