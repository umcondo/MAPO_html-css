import useSWR from "swr";
import { useTestSWR } from "../utils/useTestSWR";

const Swr2 = () => {
  const { data, mutate } = useTestSWR();

  const onChangeData = () => {
    const value = prompt("값을 입력하세요");
    mutate(value);
  };
  return (
    <div>
      <h1>Swr2연습</h1>
      <p>{data}</p>
      <button onClick={onChangeData}>값 변경</button>
    </div>
  );
};

export default Swr2;
