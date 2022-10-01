import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_OR_DECREASE_BY":
      return state + action.by;
    default:
      throw new Error();
  }
};

export default function Reducer() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: 1 });
  };
  const handleDecrease = () => {
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: -1 });
  };

  return (
    <>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <span>{count}</span>
      <button onClick={handleDecrease}>-</button>
    </>
  );
}
