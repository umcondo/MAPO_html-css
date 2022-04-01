let count = 0;
const catNames = ["cat1", "cat2", "cat3"];

// setInterval, clearInterval 사용
const timeChecker = () => {
  for (let i = 0; i < catNames.length; i++) {
    console.log(catNames[i]);

    if (count === 2) {
      clearInterval(setTimeIn);
    }
  }
  console.log(count);
  count += 1;
};

const setTimeIn = setInterval(timeChecker, 1000);

// setTimeout 사용
// const timeCounter = (i) => {
//   console.log(catNames[i]);
//   // console.log(i);
// };
// for (let i = 0; i < catNames.length; i++) {
//   const setTime = setTimeout(() => {
//     timeCounter(i);
//   }, 1000 * i);
// }
