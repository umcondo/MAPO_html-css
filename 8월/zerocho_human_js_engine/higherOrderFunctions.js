const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

console.log(add(3, 5));
console.log(calculator(add, 3, 9));

const minus = () => (a, b) => a - b;

/* 
위의 함수는 아래와 같다.
const minus = () => {
    return (a, b) => a - b;
}
*/

console.log(calculator(minus(), 4, 7));

/*
함수의 호출과 선언은 다르다. 자바스크립트에서 함수는 값으로 사용될 수 있다.
함수호출, 함수를 값(매개변수 등)으로 사용할때 헷갈린다면 함수호출을 호출된 리턴값으로 바꾸어서 생각하면 쉽다.

위의 함수는 calculator((a, b) => a - b, 4, 7)와 같다.
그러므로 결과 값은 -3이다.
*/

// 참고
console.log(undefined - undefined); // NaN
