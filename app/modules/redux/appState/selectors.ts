import { IRootState } from "../../../interfaces/IRootState";

export const selectIsSplashLoaded = (state: IRootState) => {
    return state.AppState.isSplashLoaded;
};
