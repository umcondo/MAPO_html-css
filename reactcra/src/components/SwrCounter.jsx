import useSWR from "swr";

const useCounter = () => {
  const { data, mutate } = useSWR("state", () => window.count);

  return {
    data: data || 0,
    mutate: (count) => {
      window.count = count;
      return mutate();
    },
  };
};

const SwrCounter = () => {
  const { data, mutate } = useCounter();

  const handleInc = () => mutate(data + 1);
  const handleDec = () => mutate(data - 1);

  return (
    <div>
      <h1>Swr로 카운터 예시 연습하기</h1>
      <span>count : {data}</span>
      <button onClick={handleInc}>증가</button>
      <button onClick={handleDec}>감소</button>
    </div>
  );
};

export default SwrCounter;
