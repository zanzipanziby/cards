import { RootState } from "./store";

export const errorSelect = (state: RootState) => state.app.error;
export const isLoadingSelect = (state: RootState) => state.app.isLoading;
export const isAppInitialized = (state: RootState) =>
  state.app.isAppInitialized;
