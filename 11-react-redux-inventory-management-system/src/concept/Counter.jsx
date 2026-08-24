import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByNumber,
  reset,
} from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [input, setInput] = useState(0);

  const handleIncrement = () => {
    dispatch(incrementByNumber(Number(input)));
  };

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>reset</button>
      <br />
      <br />
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleIncrement}>increment by number</button>
    </>
  );
};

export default Counter;
