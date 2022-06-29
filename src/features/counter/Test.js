import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  changeDummyData,
  testIncrement,
  testDecrement,
} from "./counterSlice";

export function Test() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  console.log("rerendered2");
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(testIncrement())}
        >
          +
        </button>
        {/* <span>{number}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(testDecrement())}
        >
          -
        </button>
        <span>{count.test}</span>
      </div>
    </div>
  );
}
