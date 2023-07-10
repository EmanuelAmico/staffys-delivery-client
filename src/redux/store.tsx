"use client";

import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./reducers/package";

const store = configureStore({
  reducer: {
    deliverypackages: packageReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
