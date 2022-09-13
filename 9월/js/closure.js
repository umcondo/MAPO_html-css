// 반복문 클로저 예제

function func() {
	for (var i = 1; i < 5; i++) {
		setTimeout(() => console.log(i), 500 * i);
	}
}

func();

// setTimeout의 콜백함수는 렉시컬환경 변수 i를 기억한다.
// 콜백함수는 태스크 큐에서 콜스택이 빌때까지 기다렸다가 실행된다.
// 콜백함수는 총 4번 태스크 큐에 쌓인다.
// 전역 실행컨텍스트가 제거되고 콜스택이 비면 태스크 큐에 있던 콜백함수가
// 콜스택에 쌓이고 실행된다.
// 이때 var로 선언된 변수 i는 5이므로 5를 출력한다.

function func2() {
	for (let i = 1; i < 5; i++) {
		setTimeout(() => console.log(i), 500 * i);
	}
}

func2();

// let으로 i를 선언하면 i를 선언할때마다 콜백함수는 새로운 렉시컬환경을 가진다.
// 그러므로 출력값은 1 2 3 4 이다.
