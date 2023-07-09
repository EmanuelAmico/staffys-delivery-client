import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { UserService } from "@/services/user.service";
import { UserLogin, UserRegister, User } from "@/types/user.types";

const initialState: User = {
  _id: "",
  name: "",
  lastname: "",
  email: "",
  is_admin: false,
  is_active: false,
  urlphoto: "",
  is_deleted: false,
  resetToken: "",
  pendingPackages: [],
  currentPackage: null,
  historyPackages: [],
};

export const setUser = createAction<User>("SET_USER");
export const logout = createAction("LOGOUT");

export const createUser = createAsyncThunk(
  "USER/CREATE_USER",
  async (userData: UserRegister) => {
    try {
      const response = await UserService.createUser(userData);
      return response.data.user;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new error("login is not working");
    }
  }
);

export const loginUser = createAsyncThunk(
  "USER/LOGIN_USER",
  async (userData: UserLogin) => {
    try {
      const response = await UserService.loginUser(userData);
      return response.data.user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new error("login is not working");
    }
  }
);

const userReducer = createReducer(initialState, {
  [setUser.type]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [logout.type]: () => initialState,

  [createUser.fulfilled.type]: (_state, action) => {
    return action.payload;
  },

  [loginUser.fulfilled.type]: (_state, action) => {
    return action.payload;
  },
});
export default userReducer;
