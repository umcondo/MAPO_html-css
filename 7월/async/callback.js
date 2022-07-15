"use strict";

// 자바스크립트는 동기적이다.
// synchronous.
// 호이스팅 이후 한줄 한줄 실행된다.
// 호이스팅 : var, 함수선언문이 제일 먼저 선언되는 것

console.log("1");

// 브라우저 API
// 콜백함수 - 어떤 일이 일어나면 실행되도록 매개변수로 받는 함수
setTimeout(() => console.log("2"), 1000);

console.log("3");

// synchronous 콜백
// 함수 선언 호이스팅됨
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// 콜백 지옥 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
