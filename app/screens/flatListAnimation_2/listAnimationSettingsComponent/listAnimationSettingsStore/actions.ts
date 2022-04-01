import { ActionTypes } from "../../../../modules/redux/actionTypes";

export const setImageScale = (payload: number[]) => {
    return { type: ActionTypes.SET_IMAGE_SCALE, payload };
};

export const setImageOpacity = (payload: number[]) => {
    return { type: ActionTypes.SET_IMAGE_OPACITY, payload };
};

export const setImageTranslateX = (payload: number[]) => {
    return { type: ActionTypes.SET_IMAGE_TRANSLATE_X, payload };
};

export const setAnimationAutoPlay = (payload: boolean) => {
    return { type: ActionTypes.SET_ANIMATION_AUTO_PLAY, payload };
};
