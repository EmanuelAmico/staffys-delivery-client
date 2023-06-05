"use client";

import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./example";
const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
export default store;
