document
  .querySelector("button")
  .addEventListener("click", () => alert("클릭됨"));

const btn = document.querySelector("button");

// btn.onfocus = (e) => {
//   alert(e.target.textContent);
// };

/* 이벤트 핸들러 제거 */
const controller = new AbortController();
btn.addEventListener(
  "click",
  () => {
    alert("zzz");
  },
  { signal: controller.signal }
);

controller.abort();
