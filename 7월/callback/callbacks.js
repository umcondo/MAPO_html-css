function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  // 콜백함수는 나중에 호출할 함수
  script.onload = () => callback(null, script);

  // 에러핸들링
  script.onerror = () =>
    callback(new Error(`${src}를 불러오는 도중 에러 발생`));

  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`${script.src}가 로드되었습니다.`);
    alert(_); // 스크립트에 정의된 함수
  }
);

// 콜백 기반 비동기 프로그래밍
// 함수 내 동작이 모두 처리된 후 실행될 콜백함수를 인수로 받아야함

loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            //
          }
        });
      }
    });
  }
});
