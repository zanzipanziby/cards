import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseErrorHandler } from "../common/utils/responseErrorHandler";

const slice = createSlice({
  // name должен быть уникальным
  // name будет использоваться в качетве приставки (redux ducks)
  name: "app",
  // Инициализационный стейт
  initialState: {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false,
  },
  // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    // TODO loader поместить сюда
    builder
      .addMatcher(
        (action: PayloadAction) => action.type.endsWith("/rejected"),
        (state, action: PayloadAction<{ error: string }>) => {
          state.error = action.payload.error;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

// Создаем reducer с помощью slice
export const appReducer = slice.reducer;

export const appActions = { ...slice.actions };
