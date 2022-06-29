import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeDummyData } from "./counterSlice";
import { createSelector } from "@reduxjs/toolkit";

export function Counter() {
  const dispatch = useDispatch();

  // const value = useSelector((state) => state.counter.value);

  // const func = createSelector(
  //   (state) => state.counter.dummyData,
  //   (dummyData) => {
  //     return dummyData.split("");
  //   }
  // );

  // const dummyArray = useSelector(func);
  const dummyArray = useSelector((state) => state.counter.dummyData);

  const array = useMemo(() => {
    return dummyArray.split("");
  }, [dummyArray]);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            dispatch(changeDummyData(e.target.value));
          }}
        />
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{value}</span> */}
        <div>
          {array.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
