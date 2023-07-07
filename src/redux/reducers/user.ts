import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { UserService } from "@/services/user.service";
import { UserState, UserRegister } from "@/types/user.types";

const initialState: UserRegister = {
  name: "",
  lastname: "",
  password: "",
  confirmpassword: "",
  email: "",
  urlphoto: "",
  is_admin: false,
  loading: false, // Set initial value to false
  error: null as string | null,
};

export const setuser = createAction<UserState>("SET_USER");
export const logout = createAction("LOGOUT");

export const createUser = createAsyncThunk(
  "user/fetchUser",
  async (userData: UserRegister) => {
    try {
      const response = await UserService.createUser(userData);

      return response.data.data.user;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new error("no funciona el registro");
    }
  }
);

const userReducer = createReducer(initialState, {
  [setuser.type]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [logout.type]: () => initialState,
  [createUser.pending.toString()]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [createUser.fulfilled.type]: (state, action) => {
    const {
      name,
      lastname,
      password,
      confirmpassword,
      email,
      urlphoto,
      is_admin,
    } = action.payload;
    return {
      ...state,
      name,
      lastname,
      password,
      confirmpassword,
      email,
      urlphoto,
      is_admin,
    };
  },
  [createUser.rejected.type]: (state, action) => {
    state.loading = false;
    state.error = action.error.message || "Failed to fetch user data.";
  },
});
export default userReducer;
