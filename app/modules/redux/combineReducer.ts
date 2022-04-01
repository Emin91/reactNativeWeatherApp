import { combineReducers } from 'redux';
import { IRootState } from '../../interfaces/IRootState';
import { ListAnimationSettings } from '../../screens/flatListAnimation_2/listAnimationSettingsComponent/listAnimationSettingsStore/reducer';
import { Weather } from './weather/reducer';

const combineReducer = combineReducers<IRootState>({
    Weather,
    ListAnimationSettings,
});

export default combineReducer;