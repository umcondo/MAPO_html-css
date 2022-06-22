import { useCallback, useRef, useState } from "react";

const DataBinding = () => {
  const count = useRef(4);

  const onIncrease = () => {
    count.current++;
  };

  const alertCount = () => {
    alert("현재 Count값은 " + count.current + "입니다");
  };

  const [currentCount, setCurrentCount] = useState(0);

  const onClick = () => {
    setCurrentCount(count.current);
  };

  return (
    <div>
      <h1 style={{ color: "tomato" }}>{count.current}</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={alertCount}>현재 값 확인</button>
      <h3 style={{ color: "tomato" }}>
        model의 data는 바뀌지만 view의 data는 바뀌지 않는다!!
      </h3>

      <button onClick={onClick}>현 상태 {currentCount}</button>
      <h3 style={{ color: "tomato" }}>클릭 시 상태가 변하므로 리렌더링 됨</h3>

      <p>
        리액트의 경우 단방향 데이터바인딩이므로 데이터바인딩을 하고
        싶다면(view와 model의 데이터를 동기화하고 싶다면)
        <br />
        state를 사용해 코드를 새로 만들어야한다. 이는 원하는 데이터만 바인딩할
        수<br />
        있으므로 효율적이다. (하지만 코드를 일일이 작성해야하므로 할 일이 많다.)
        <br />
        어플리케이션이 복잡해질 수록 코드가 많아질 것이다...
      </p>
    </div>
  );
};

export default DataBinding;
