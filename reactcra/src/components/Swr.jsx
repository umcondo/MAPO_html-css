import useSWR from "swr";
import { useTestSWR } from "../utils/useTestSWR";

const Swr = () => {
  const { data } = useTestSWR();

  return (
    <div>
      <h1>Swr연습</h1>
      <h4>{data}</h4>
    </div>
  );
};

export default Swr;
