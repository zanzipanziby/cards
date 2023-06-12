import { RootState } from "../../app/store";

export const profileSelect = (state: RootState) => state.auth.profile;
export const isLoggedInSelect = (state: RootState) => state.auth.isLoggedIn;
