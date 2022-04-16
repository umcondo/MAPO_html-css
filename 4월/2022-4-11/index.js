const lunchMenu = ["짜장면", "돈까스", "라멘", "버거킹", "샐러드"];

console.log(`******** 배열길이 : ${lunchMenu.length} ********`);

const num1 = Math.random();
console.log(`******** 무작위 값 num1 : ${num1} ********`);

const num2 = Math.floor(num1);
console.log(`******** 무작위 값 num2 : ${num2} ********`);

const num3 = Math.floor(num1 * lunchMenu.length);
console.log(`******** 무작위 값 num3 : ${num3} ********`);

console.log(
  `*********************************************************************`
);

for (i = 0; i < lunchMenu.length; i++) {
  const num4 = Math.floor(Math.random() * lunchMenu.length);
  console.log(`${i}번째 랜덤값 : ${num4}`);

  if (num4 === i) {
    console.log(`${i}번째 인덱스는 같다 //  ${lunchMenu[num4]}`);
  }
}

console.log(
  `*********************************************************************`
);

lunchMenu.forEach((elm, index) => {
  const num4 = Math.floor(Math.random() * lunchMenu.length);
  console.log(`${i}번째 랜덤값 : ${num4}`);

  if (num4 === index) {
    console.log(`${index}번째 인덱스는 같다  // ${elm}`);
  }
});

document.querySelector("button").addEventListener("click", () => {
  const num4 = Math.floor(Math.random() * lunchMenu.length);

  //   lunchMenu.forEach((elm, index) => {
  //     if (num4 === index) {
  //       alert(`${index}번째 인덱스는 같다  // ${elm}`);
  //     }
  //   });
  for (let i = 0; i < lunchMenu.length; i++) {
    if (i === num4) {
      //   alert(lunchMenu[i]);
      document.querySelector("#menu").innerText = lunchMenu[i];
      document.getElementById("menu").style.color = `#${Math.floor(
        Math.random() * 1000000
      )
        .toString()
        .padStart(6, "0")}`;
      //   console.log(
      //     Math.floor(Math.random() * 1000000)
      //       .toString()
      //       .padStart(6, "0")
      //   );
    }
  }
});

document.querySelector("div").style.fontSize = "2em";
