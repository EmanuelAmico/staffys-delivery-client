"use client";
import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./reducers/package";
import userReducer from "./reducers/user";
import formReducer from "./reducers/form";
import selectedPackageReducer from "./reducers/selectedPackage";

const store = configureStore({
  reducer: {
    deliverypackages: packageReducer,
    user: userReducer,
    form: formReducer,
    selectedPackage: selectedPackageReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
