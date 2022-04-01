import { ActionTypes } from "../../../../modules/redux/actionTypes";

export interface IListAnimationSettings {
    image: {
        scale: number[];
        opacity: number[];
        translateX: number[];
    },
    autoPlay: boolean;
};

export const initState: IListAnimationSettings = {
    image: {
        scale: [0.95, 1, 1.3],
        opacity: [0.55, 1, 0],
        translateX: [20, 0, -100],
    },
    autoPlay: false,
};

export const ListAnimationSettings = (state: IListAnimationSettings = initState, action: { type: string, payload: any }): IListAnimationSettings => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_IMAGE_SCALE:
            return { ...state, image: { ...state.image, scale: payload } };
        case ActionTypes.SET_IMAGE_OPACITY:
            return { ...state, image: { ...state.image, opacity: payload } };
        case ActionTypes.SET_IMAGE_TRANSLATE_X:
            return { ...state, image: { ...state.image, translateX: payload } };
        case ActionTypes.SET_ANIMATION_AUTO_PLAY:
            return { ...state, autoPlay: payload };
        default:
            return state;
    };
};
