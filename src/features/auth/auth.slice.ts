import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LoginRequestType,
  RegisterRequestType,
} from "features/auth/types/auth.request.types";
import { authApi } from "features/auth/api/auth.api";
import { ProfileType } from "features/auth/types/auth.response.types";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../../common/utils/responseErrorHandler";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, () => {
        toast.success("You have successfully registered");
      })
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
      })
      .addCase(authorization.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.profile = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
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
      return rejectWithValue({
        error: responseErrorHandler(e as AxiosError | Error),
      });
    }
  }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, LoginRequestType>(
  "auth/login",
  async (arg: LoginRequestType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await authApi.login(arg);
      toast.success("Logged in successfully");
      return { profile: res.data };
    } catch (e) {
      debugger;
      return rejectWithValue({
        error: responseErrorHandler(e as AxiosError | Error),
      });
    }
  }
);

const authorization = createAppAsyncThunk<{ profile: ProfileType }, {}>(
  "auth/authorization",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await authApi.authorization({});
      return { profile: res.data };
    } catch (e) {
      return rejectWithValue({
        error: responseErrorHandler(e as AxiosError | Error),
      });
    }
  }
);

const logout = createAppAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await authApi.logout({});
    toast.success(res.data.info);
  } catch (e) {
    return rejectWithValue(responseErrorHandler(e as AxiosError | Error));
  }
});

const updateUser = createAppAsyncThunk(
  "auth/updateUser",
  async (arg: { name?: string; avatar?: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await authApi.updateUser(arg);
      return { profile: res.data.updatedUser };
    } catch (e) {
      return rejectWithValue(responseErrorHandler(e as AxiosError | Error));
    }
  }
);

export const authReducer = slice.reducer;
export const authThunk = { register, login, authorization, logout, updateUser };
export const authActions = { ...authThunk, ...slice.actions };
