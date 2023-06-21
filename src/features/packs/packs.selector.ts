import { RootState } from "../../app/store";

export const getPacksSelect = (state: RootState) => state.packs.cardPacks;
