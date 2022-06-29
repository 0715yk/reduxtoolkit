import { createReducer, createAction } from "@reduxjs/toolkit";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const changeDummyData = createAction("CHANGE");

const counterReducer = createReducer(
  { value: 0, dummy: "" },
  {
    [increment]: (state, action) => {
      state.value++;
    },
    [decrement]: (state, action) => {
      state.value--;
    },
    [changeDummyData]: (state, action) => {
      state.dummy = action.payload;
    },
  }
);

export default counterReducer;
