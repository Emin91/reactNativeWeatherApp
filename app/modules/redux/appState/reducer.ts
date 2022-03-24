import { ActionTypes } from "../actionTypes";

export interface IAppState {
    isSplashLoaded: boolean;
};

export const initState: IAppState = {
    isSplashLoaded: false,
};

export const AppState = (state: IAppState = initState, action: { type: string, payload: any }): IAppState => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_IS_SPLASH_LOADED:
            return { ...state, isSplashLoaded: payload };
        default:
            return state;
    };
};
