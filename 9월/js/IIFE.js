// IIFE - immediately-invoked function Expression
// 즉시 실행 함수 표현식

(function func() {
	console.log('IIFE');
})();

(() => {
	console.log('using arrow function, IIFE');
})();

// 사용 - 클로저

const increasingCounter = (function func2() {
	let count = 0;
	return () => {
		count++;
		return console.log(count);
	};
})();

increasingCounter(); // 1
increasingCounter(); // 2
increasingCounter(); // 3
increasingCounter(); // 4

// count 변수가 은닉되고 increasingCounter를 호출할때마다 count값이 console.log로 찍힌다.
