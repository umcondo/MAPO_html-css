import useSWR from "swr";

let testValue = "testValue";
export function useTestSWR() {
  const { data, mutate } = useSWR("testSWR", () => {
    return testValue;
  });

  return {
    data,
    mutate: (value) => {
      testValue = value;
      return mutate();
    },
  };
}
