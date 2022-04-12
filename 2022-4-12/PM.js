const burgerMenu = [ "치즈와퍼", "불고기와퍼", "새우버거", "치킨버거", "베이컨와퍼" ];
​
// 주문(주세요) 버튼 클릭 이벤트
function btn_order() {
  let txt_menu = document.getElementById("txt__order").value.trim(); 	// input text value (trim 으로 앞뒤 공백 제거)
​
  const div_order = document.getElementById("div_order"); 		// 화면 표시용 div1
  const div_error = document.getElementById("div_error"); 		// 화면 표시용 div2
​
  const regex = /(\s*)/g; 						// 문자열의 모든 공백제거 정규식
  let chk_txt = txt_menu.replace(regex, ""); 				// 공백 제거된 메뉴명
​
​
  // input text value 체크
  // value 값이 없을 경우 (value 가 없을 경우 false 반환됨)
  if (!chk_txt) {
    div_order.innerHTML = ""; // div1 초기화
      div_error.innerHTML = `<p> <span style="color:red"> 주문할 메뉴를 입력하세요 </span> </p>`;
      
  } else {
    div_order.innerHTML = `<p> 음~~ <span style="color:orange"> ${txt_menu} </span> 주세요.</p>`;
​
      
    // for문 배열체크
    for (let i = 0; i < burgerMenu.length; i++) {
​
        // 입력값이 배열에 있을 경우
        if (chk_txt === burgerMenu[i]) {
​
            div_error.innerHTML = `<p> 네~ 손님~~ <span style="color:orange"> ${txt_menu} </span> 준비해드릴께요 ^^ </p>`;
​
            break; // for문 탈출
​
        } else {
​
            // 입력값이 배열에 없을 경우
            div_error.innerHTML = `<p> 손님~~ <span style="color:orange"> ${txt_menu} </span> 는 없는 메뉴에요 ㅠㅠㅠㅠ</p>`;
        }
      }
​
​
    // forEach (개발팀만 참고)
    try {
      burgerMenu.forEach((item, index) => {
        if (chk_txt === item) {
          div_error.innerHTML = `<p> 네~ 손님~~ <span style="color:orange"> ${txt_menu} </span> 준비해드릴께요 ^^ </p>`;
​
          throw "stop forEach";
        } else {
          // 입력값이 배열에 없을 경우
          div_error.innerHTML = `<p> 손님~~ <span style="color:orange"> ${txt_menu} </span> 는 없는 메뉴에요 ㅠㅠㅠㅠ</p>`;
        }
      });
    } catch (e) {
      console.log("exception error : ", e);
    }
  }
}