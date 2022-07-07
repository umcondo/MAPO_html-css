import { useLocalStateSWR } from "./uselocalStateSwr";

const SwrTest = () => {
  const { data, mutate } = useLocalStateSWR("");
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
