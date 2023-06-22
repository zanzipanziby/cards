import { RootState } from "../../app/store";

export const getPacksSelect = (state: RootState) => state.packs.cardPacks;
export const activeShowPacksButton = (state: RootState) =>
  state.packs.packsListInterface.activeShowPacksButton;
