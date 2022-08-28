const exposure = (function () {
  let count = 0;

  return (closure = function () {
    const decrease = () => {
      --count;
    };
    const increase = () => {
      ++count;
    };
    return { count, decrease, increase };
  });
})();

const closure2 = exposure;
console.log(closure2);

const { count, decrease, increase } = closure2();

console.log(count);
decrease();
decrease();
decrease();

console.log(count);
console.log(closure2());

// closure로 useState만들어보기

function useState(initValue) {
  // 상위 스코프의 지역 변수
  let value = initValue;

  // 상위 스코프의 지역변수를 리턴하는 함수
  const state = () => value;

  // 새로운 매개변수를 받아 상위 스코프의 지역변수를 변경하는 함수
  const setState = (newValue) => {
    value = newValue;
  };

  return [state, setState];
}

const [count2, setCount2] = useState(1);
console.log(count2());

setCount2(3);
console.log(count2());
