import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { UserLogin, UserRegister, User } from "@/types/user.types";
import { AuthService } from "@/services/auth.service";
import { UserService } from "@/services/user.service";

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
    const response = await AuthService.register(userData);
    const user = response.data.user;
    const token = response.data.token;
    localStorage.setItem("token", token);
    return { ...user, token };
  }
);

export const login = createAsyncThunk(
  "USER/LOGIN",
  async (userData: UserLogin) => {
    const response = await AuthService.login(userData);
    const user = response.data.user;
    const token = response.data.token;
    localStorage.setItem("token", token);
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

export const initResetPassword = createAsyncThunk(
  "USER/INIT_RESET_PASSWORD",
  async (email: string) => {
    await AuthService.initResetPassword(email);
  }
);

export const resetPassword = createAsyncThunk(
  "USER/RESET_PASSWORD",
  async ({
    email,
    code,
    password,
    confirmPassword,
  }: {
    email: string;
    code: number;
    password: string;
    confirmPassword: string;
  }) => {
    await AuthService.resetPassword(email, code, password, confirmPassword);
  }
);

export const takePackage = createAsyncThunk(
  "USER/TAKE_PACKAGE",
  async (packageId: string, thunkAPI) => {
    const { user } = thunkAPI.getState() as { user: User };

    const updatedUser = await UserService.takePackage(user, packageId);

    return updatedUser;
  }
);

export const startDelivery = createAsyncThunk(
  "USER/START_DELIVERY",
  async (_, thunkAPI) => {
    const { user } = thunkAPI.getState() as { user: User };

    const updatedUser = await UserService.startDelivery(user);

    return updatedUser;
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
    .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(
      checkForUserTokenAndPersistSession.fulfilled,
      (state, action: PayloadAction<User>) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    )
    .addCase(checkForUserTokenAndPersistSession.rejected, (_state, _action) => {
      localStorage.removeItem("token");
      return initialState;
    })
    .addCase(initResetPassword.fulfilled, (state) => {
      return state;
    })
    .addCase(initResetPassword.rejected, (state) => {
      return state;
    })
    .addCase(resetPassword.fulfilled, (state) => {
      return state;
    })
    .addCase(resetPassword.rejected, (state) => {
      return state;
    })
    .addCase(takePackage.fulfilled, (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(takePackage.rejected, (state) => {
      return state;
    })
    .addCase(startDelivery.fulfilled, (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(startDelivery.rejected, (state) => {
      return state;
    });
});

export default userReducer;
