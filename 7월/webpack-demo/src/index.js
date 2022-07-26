import _ from "lodash";
import "./style.css";
import Bella from "./bella.jpg";

function component() {
  const element = document.createElement("div");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  // 이제 Lodash를 스크립트로 가져왔습니다.
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 원래 있던 div 에 이미지를 추가합니다.
  //   const myImg = new Image();
  //   myImg.src = Bella;

  //   element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
