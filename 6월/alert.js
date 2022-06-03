// alert(alert(1) || 2 || alert(3));
// alert(alert(1) && alert(3));

let age;

if (age >= 14 && age <= 90) {
  // 속한다.
} else {
  // 안 속한다.
}

if (!(age >= 14 && age <= 90)) {
  // 안 속한다.
} else {
  // 속한다.
}

if (age < 14 || age > 90) {
  // 안 속한다.
} else {
  // 속한다.
}

/* ----- 로그인 구현하기 ----- */

let userInput = prompt();

if (userInput == "Admin") {
  let password = prompt("비밀번호가 뭔가요?");
  if (password == "TheMaster") {
    alert("환영합니다");
  } else if (!password) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하셨습니다");
  }
}
