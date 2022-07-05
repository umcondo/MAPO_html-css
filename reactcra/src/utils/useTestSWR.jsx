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

// 전역으로 저장할 값
// root 색깔, access token, refresh token
// api로 저장할 값
// 유저정보,

export function useSWRLocalState(initialState) {
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
}
