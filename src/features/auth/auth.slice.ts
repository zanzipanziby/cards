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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<{ profile: ProfileType }>) => {
        state.profile = action.payload.profile;
      }
    );
  },
});

const register = createAppAsyncThunk<void, RegisterRequestType>(
  "auth/register",
  (arg: RegisterRequestType) => {
    authApi.register(arg).then();
  }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, LoginRequestType>(
  "auth/login",
  async (arg: LoginRequestType) => {
    const res = await authApi.login(arg);
    return { profile: res.data };
  }
);

export const authReducer = slice.reducer;
export const authThunk = { register, login };
