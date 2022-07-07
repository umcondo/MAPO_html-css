import useSWR from "swr";

const useCounter = () => {
  let count = 0;
  const { data, mutate } = useSWR("counter", () => count);

  return {
    data,
    mutate: (num) => {
      count += num;
      return mutate();
    },
  };
};

const CounterSwr = () => {
  return <div>dds</div>;
};

export default CounterSwr;
