"use client";

import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = false;
export const changeValue = createAction<boolean>("CHANGE_VALUE");

const reducer = createReducer(initialState, {
  [changeValue.type]: (_state, action) => action.payload,
});

export default reducer;
