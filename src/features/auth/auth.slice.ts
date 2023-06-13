import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LoginRequestType,
  RegisterRequestType,
} from "features/auth/types/auth.request.types";
import { authApi } from "features/auth/api/auth.api";
import { ProfileType } from "features/auth/types/auth.response.types";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { AxiosError } from "axios";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ profile: ProfileType }>) => {
          state.profile = action.payload.profile;
          state.isLoggedIn = true;
        }
      )
      .addCase(authorization.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
      });
  },
});

const register = createAppAsyncThunk<any, RegisterRequestType>(
  "auth/register",
  async (arg: RegisterRequestType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await authApi.register(arg);
    } catch (e) {
      return rejectWithValue(e);
    }
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
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await authApi.authorization(arg);
      return { profile: res.data };
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error);
    }
  }
);

export const authReducer = slice.reducer;
export const authThunk = { register, login, authorization };
export const authActions = { ...authThunk, ...slice.actions };
