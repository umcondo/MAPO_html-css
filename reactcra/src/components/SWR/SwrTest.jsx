import { useLocalStateSWR } from "./uselocalStateSwr";

const SwrTest = () => {
  const { data, mutate } = useLocalStateSWR("안녕하세요");
  const onChangeData = () => {
    mutate("zzzzz");
  };
  return (
    <div>
      {data}
      <button onClick={onChangeData}>change Data</button>
    </div>
  );
};

export default SwrTest;
