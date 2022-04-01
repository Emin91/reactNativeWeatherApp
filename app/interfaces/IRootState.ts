import { IWeather } from "../modules/redux/weather/reducer";
import { IListAnimationSettings } from "../screens/flatListAnimation_2/listAnimationSettingsComponent/listAnimationSettingsStore/reducer";

export interface IRootState {
    Weather: IWeather;
    ListAnimationSettings: IListAnimationSettings;
};
