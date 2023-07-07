import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

import { UserService } from "@/services/user.service";
import { UserState } from "@/types/user.types";

const initialState: UserState = {
  name: "",
  lastname: "",
  password: "",
  confirmpassword: "",
  email: "",
  urlphoto: "",
  loading: false, // Set initial value to false
  error: null as string | null,
};

export const setuser = createAction<UserState>("SET_USER");
export const logout = createAction("LOGOUT");

export const createUser = createAsyncThunk(
  "user/fetchUser",
  async (userData: UserState, { rejectWithValue }) => {
    try {
      const response = await UserService.createUser(userData);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to create user.");
    }
  }
);

const userReducer = createReducer(initialState, {
  [setuser.type]: (state, action: PayloadAction<UserState>) => ({
    ...state,
    ...action.payload,
  }),
  [logout.type]: () => initialState,
  [createUser.pending.type]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [createUser.fulfilled.type]: (state, action: PayloadAction<UserState>) => {
    state.loading = false;
    state.error = null;
    return { ...state, ...action.payload };
  },
  [createUser.rejected.type]: (state, action) => {
    state.loading = false;
    state.error = action.error.message || "Failed to fetch user data.";
  },
});

export default userReducer;
