import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

import { UserService } from "@/services/user.service";
import { UserLogin, UserRegister, User } from "@/types/user.types";
import { AuthService } from "@/services/auth.service";

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
  token: "",
};

export const setUser = createAction<User>("SET_USER");
export const logout = createAction("LOGOUT");

export const register = createAsyncThunk(
  "USER/REGISTER",
  async (userData: UserRegister) => {
    const response = await UserService.register(userData);
    return response.data.user;
  }
);

export const login = createAsyncThunk(
  "USER/LOGIN",
  async (userData: UserLogin) => {
    const response = await UserService.login(userData);
    const user = response.data.user;
    const token = response.data.token;
    return { ...user, token };
  }
);

export const checkForUserTokenAndPersistSession = createAsyncThunk(
  "USER/ME",
  async () => {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("No user token found");

    const user = await AuthService.me(token);

    return { ...user, token };
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(logout, () => {
      localStorage.removeItem("token");
      return initialState;
    })
    .addCase(register.fulfilled, (_state, action: PayloadAction<User>) => {
      return action.payload;
    })
    .addCase(login.fulfilled, (_state, action: PayloadAction<User>) => {
      return action.payload;
    })
    .addCase(
      checkForUserTokenAndPersistSession.fulfilled,
      (_state, action: PayloadAction<User>) => {
        return action.payload;
      }
    )
    .addCase(checkForUserTokenAndPersistSession.rejected, (_state, _action) => {
      localStorage.removeItem("token");
      return initialState;
    });
});

export default userReducer;
