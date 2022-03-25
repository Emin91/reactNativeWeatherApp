import { setForecastList, setWeather } from '../../redux/weather/actions';
import { IForecastItem } from '../../../interfaces/IForecastItem';
import { IWeatherItem } from '../../../interfaces/IWeatherItem';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaActionTypes } from '../sagaActionTypes';
import { IAxios } from '../../../axios';
import { getWeather } from './actions';

export function* workerGetWeather({ }: ReturnType<typeof getWeather>) {
    try {
        const apiKey = '4486e591bd278be78e989429da35190c';
        const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${50.450001}&lon=${30.523333}&exclude=hourly,current,minutely,alerts&cnt=7&units=metric&appid=${apiKey}`;
        const mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=${apiKey}`;
        const responseDaily: IWeatherItem = yield call(IAxios.post, mainUrl);
        const responseForecast: { daily: IForecastItem } = yield call(IAxios.post, forecastUrl);
        if (responseDaily) yield put(setWeather(responseDaily));
        if (responseForecast) yield put(setForecastList(responseForecast.daily));
    } catch (error) {
        console.error('workerGetWeather: ', error);
    };
};

export function* watchLoadWeatherState() {
    yield takeEvery(SagaActionTypes.GET_WEATHER_STATE, workerGetWeather);
};
