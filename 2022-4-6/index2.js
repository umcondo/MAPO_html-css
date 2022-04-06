// id를 입력받아 div생성
function makeDiv(idName) {
  let makediv = document.createElement("div");
  makediv.setAttribute("id", idName);
  document.body.appendChild(makediv);
}

makeDiv("colorBase");
makeDiv("colorBase2");

let wNav = document.querySelectorAll("nav > .item");
wNav.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    changeBar(e.currentTarget);
  });
});

function changeBar(e) {
  //   console.log(e.offsetTop);
  //   console.log(e.currentTarget.offsetTop);
  document.getElementById("colorBase").style.top =
    e.offsetTop + e.offsetHeight + "px";
  document.getElementById("colorBase").style.left = e.offsetLeft + "px";
  document.getElementById("colorBase").style.width = e.offsetWidth + "px";
}
