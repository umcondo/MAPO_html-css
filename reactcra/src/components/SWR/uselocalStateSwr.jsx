import useSWR from "swr";

export const useLocalStateSWR = (initialState) => {
  let value = initialState;
  const { data, mutate } = useSWR("state", () => {
    return value;
  });

  return {
    data,
    mutate: (setState) => {
      value = setState;
      return mutate();
    },
  };
};
