import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../common/utils/create-app-async-thunk";
import { packsApi } from "./api/packs.api";
import { responseErrorHandler } from "../../common/utils/responseErrorHandler";
import { AxiosError } from "axios";
import { FetchCardPacksRequestType } from "./types/packs.request.type";

const slice = createSlice({
  name: "packs",
  initialState: {
    cardPacks: null as null | FetchCardPacksResponseType,
    packsListInterface: {
      activeShowPacksButton: "All Cards" as "All Cards" | "My Cards",
      paginationPage: 1,
      //todo раздать disable компонентам
      disable: false,
    },
  },
  reducers: {
    changeActiveShowPacksButton: (
      state,
      action: PayloadAction<{ activeButton: "All Cards" | "My Cards" }>
    ) => {
      state.packsListInterface.activeShowPacksButton =
        action.payload.activeButton;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.cardPacks;
    });
  },
});

const fetchCardPacks = createAppAsyncThunk(
  "packs/fetchPacks",
  async (arg: FetchCardPacksRequestType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await packsApi.fetchCardsPack(arg);
      return { cardPacks: res.data };
    } catch (e) {
      return rejectWithValue({
        error: responseErrorHandler(e as AxiosError | Error),
      });
    }
  }
);

export const packsReducer = slice.reducer;
const packsThunks = { fetchCardPacks };

export const packsActions = { ...packsThunks, ...slice.actions };
