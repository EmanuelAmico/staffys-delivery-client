"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

import exampleReducer from "./example";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    user: userReducer,
  },
});
export default store;
