const toggleBtn = document.querySelector(".navbar__togglebtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

let pageNum = 0;

// 변수선언
const picture = document.getElementsByClassName("picture");
const btn = document.querySelectorAll(".btn > button");
const slideLeftBtn = document.querySelector(".left");
const slideRightBtn = document.querySelector(".right");

// 첫화면
pictureView(pageNum);

for (i = 0; i < picture.length; i++) {
  btnClick(i);
}

slideLeftBtn.addEventListener("click", () => {
  pageNum--;
  pictureView(pageNum);
});

slideRightBtn.addEventListener("click", () => {
  pageNum++;
  pictureView(pageNum);
});

function pictureView(n) {
  let i;
  // n이 -1일때
  pageNum = n < 0 ? 3 : pageNum;

  // n이 4일때
  pageNum = n > 3 ? 0 : pageNum;

  // 사진 안보이게
  for (i = 0; i < picture.length; i++) {
    picture[i].style.display = "none";
  }

  // 버튼 안보이게
  for (i = 0; i < btn.length; i++) {
    btn[i].classList = btn[i].classList.value.replace("active", "");
  }

  picture[pageNum].style.display = "block";
  btn[pageNum].classList = "active";
}

// 버튼에 이벤트리스너 달아주기
function btnClick(i) {
  btn[i].addEventListener("click", () => {
    pageNum = i;
    pictureView(pageNum);
  });
}
