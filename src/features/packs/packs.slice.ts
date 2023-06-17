import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "packs",
  initialState: {
    packs: null,
  },
  reducers: {},
});

export const packsReducer = slice.reducer;
