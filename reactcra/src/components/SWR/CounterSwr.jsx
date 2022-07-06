import useSWR from "swr";

const useCounter = () => {
  let count = 0;
  const { data, mutate } = useSWR("counter", () => count);

  return {
    data: data || 0,
    mutate: (inputCount) => {
      count = inputCount;
      return mutate();
    },
  };
};

const CounterSwr = () => {
  const { data, mutate } = useCounter();

  const onIncrease = () => mutate(data + 1);
  const onDecrease = () => mutate(data - 1);

  return (
    <div>
      <h1>count : {data}</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
};

export default CounterSwr;
