import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterRequestType } from "features/auth/types/auth.request.types";
import { authApi } from "features/auth/api/auth.api";

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

const register = createAsyncThunk(
  "auth/register",
  (arg: RegisterRequestType) => {
    authApi.register(arg).then();
  }
);

export const authReducer = slice.reducer;
export const authThunk = { register };
