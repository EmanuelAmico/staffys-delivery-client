"use client";
import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./reducers/package";
import userReducer from "./reducers/user";

const store = configureStore({
  reducer: {
    deliverypackages: packageReducer,
    user: userReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
