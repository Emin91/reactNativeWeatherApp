import { combineReducers } from 'redux';
import { IRootState } from '../../interfaces/IRootState';
import { AppState } from './appState/reducer';

const combineReducer = combineReducers<IRootState>({
    AppState,
});

export default combineReducer;