const external = () => {
  let count = 0;
  return function closure() {
    return --count;
  };
};

const f = external();
const increaseNum = f;
console.log(increaseNum());
console.log(increaseNum());
console.log(increaseNum());
console.log(increaseNum());
