"use strict";

// 프로미스는 비동기처리를 위한 자바스크립트 내장 객체
// 1. state: pending -> fulfilled or rejected

// 2. 제공자 vs 정보사용자
// Produce vs Consumer

// 1. Producer

// 프로미스가 만들어지는 순간 실행된다.
// 새로운 프로미스가 만들어지면 the executor가 자동적으로 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  // 파일읽어오기, 네트워크 통신등
  // 시간이 오래걸리는 작업들이라 비동기적으로 처리해야한다.
  console.log("doing somthing...");
  setTimeout(() => {
    // resolve("elile");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then(성공), catch, finally
promise
  .then((value) => {
    console.log(value);
  }) // then도 프로미스 객체 반환
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공,실패에 상관없이 실행됨
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 값을 바로 전달해도 되고 promise를 전달해도됨
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error handling
