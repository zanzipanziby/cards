import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../common/utils/create-app-async-thunk";
import { packsApi } from "./api/packs.api";
import { responseErrorHandler } from "../../common/utils/responseErrorHandler";
import { AxiosError } from "axios";

const slice = createSlice({
  name: "packs",
  initialState: {
    cardPacks: null as null | FetchCardPacksResponseType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.cardPacks;
    });
  },
});

const fetchCardPacks = createAppAsyncThunk(
  "packs/fetchPacks",
  async (arg: FetchCardPacksResponseType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await packsApi.fetchCardsPack(arg);
      return { cardPacks: res.data };
    } catch (e) {
      return rejectWithValue(responseErrorHandler(e as AxiosError | Error));
    }
  }
);

export const packsReducer = slice.reducer;
const packsThunks = { fetchCardPacks };

export const packsActions = { ...packsThunks, ...slice.actions };
