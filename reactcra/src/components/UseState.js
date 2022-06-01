import { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(0);
  const increaseNum = () => {
    setNum((num) => num + 1);
  };
  return (
    <div>
      <h1>usestate 연습</h1>
      <h1>{num}</h1>
      <button onClick={increaseNum}>증가</button>
      <button onClick={() => setNum(num - 1)}>감소</button>
    </div>
  );
};

export default UseState;
