"use client";
import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./reducers/package";
import userReducer from "./reducers/user";
import formReducer from "./reducers/form";

const store = configureStore({
  reducer: {
    deliverypackages: packageReducer,
    user: userReducer,
    form: formReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
