import { useLocalStateSWR } from "./uselocalStateSwr";

const SwrTest2 = () => {
  const { data, mutate } = useLocalStateSWR("");
  return <div>{data}</div>;
};
export default SwrTest2;
