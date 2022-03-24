import { ActionTypes } from "../actionTypes";

export const setIsSplashLoaded = (payload: boolean) => {
    return { type: ActionTypes.SET_IS_SPLASH_LOADED, payload };
};