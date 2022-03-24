import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { IAxios } from '../../../axios';
import { SagaActionTypes } from '../sagaActionTypes';
import { getWeather } from './actions';

export function* workerGetWeather({ }: ReturnType<typeof getWeather>) {
    try {
        const apiKey = '4486e591bd278be78e989429da35190c';
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=40.409264&lon=49.867092&cnt=7&units=metric&appid=${apiKey}`
        const mainUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40.409264&lon=49.867092&appid=${apiKey}`
        const response: Promise<any> = yield call(IAxios.post, forecastUrl)
        console.log('response', response)
    } catch (error) {
        console.error('workerGetWeather: ', error);
    };
};

export function* watchLoadWeatherState() {
    yield takeEvery(SagaActionTypes.GET_WEATHER_STATE, workerGetWeather);
};
