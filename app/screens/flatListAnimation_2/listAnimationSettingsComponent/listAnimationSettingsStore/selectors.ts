import { IRootState } from "../../../../interfaces/IRootState";

export const selectImageSettings = (state: IRootState) => {
    return state.ListAnimationSettings.image;
};

export const selectAnimationAutoPlay = (state: IRootState) => {
    return state.ListAnimationSettings.autoPlay;
};
