import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LoginRequestType,
  RegisterRequestType,
} from "features/auth/types/auth.request.types";
import { authApi } from "features/auth/api/auth.api";
import { ProfileType } from "features/auth/types/auth.response.types";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLoggedIn: false,
    isRegistered: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<{ profile: ProfileType }>) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
        state.isRegistered = true;
      }
    );
    builder.addCase(register.fulfilled, (state) => {
      state.isRegistered = true;
    });
    builder.addCase(authorization.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
      state.isLoggedIn = true;
      state.isRegistered = true;
    });
  },
});

const register = createAppAsyncThunk<void, RegisterRequestType>(
  "auth/register",
  async (arg: RegisterRequestType) => {
    await authApi.register(arg);
  }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, LoginRequestType>(
  "auth/login",
  async (arg: LoginRequestType) => {
    const res = await authApi.login(arg);
    return { profile: res.data };
  }
);

const authorization = createAppAsyncThunk<{ profile: ProfileType }, {}>(
  "auth/authorization",
  async (arg: {}) => {
    const res = await authApi.authorization(arg);
    return { profile: res.data };
  }
);

export const authReducer = slice.reducer;
export const authThunk = { register, login, authorization };
