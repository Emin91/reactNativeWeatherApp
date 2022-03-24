import React, { FC, useEffect, useMemo, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { ForecastItems } from '../../components/forecastItems';
import { GradientText } from '../../components/gradientText';
import { MainHeader } from '../../components/mainHeader';
import { getWeather } from '../../modules/saga/launcher/actions';
import { getStyle } from './styles';


export const MainScreen: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const temperature = 26;
    const weatherState = 'Cloud';
    const dispatch = useDispatch();
    const mainUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=40.409264&lon=49.867092&exclude=hourly,current,minutely,alerts&appid=4486e591bd278be78e989429da35190c`
    const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weeks: number[] = [0, 1, 2, 3, 4, 5, 6];
    var currentDate = new Date().getDay();
    const [theArray, setTheArray] = useState<Array<any>>([{ date: '', days: '' }]);
    var loopWeek: any = weeks.splice(currentDate).concat(weeks) || [];

    const createForecastDays = () => {
        var filteredDays: any = [];
        var filteredDate: any = [];
        var res: any = [];
        for (var i = 0; i < loopWeek.length; i++) {
            filteredDays.push(weekDays[loopWeek[i]]);
            var d = new Date();
            d.setDate(d.getDate() + i);
            filteredDate.push(d.getDate());
            res.push({ date: filteredDate[i], days: filteredDays[i] });
            setTheArray(res);
        };
    };

    useEffect(() => {
        createForecastDays();
    }, []);

    return (
        <View style={styles.container}>
            <MainHeader />
            <View style={styles.weatherIconWrapper}>
                <Image resizeMode='contain' style={styles.weatherIcon} source={require('../../assets/images/cloudZap.png')} />
            </View>
            <GradientText style={styles.temperatureText}>{temperature}°</GradientText>
            <Text numberOfLines={1} style={styles.weatherStateText}>{weatherState}</Text>
            <Text style={styles.forecastText}>7-day forecast</Text>
            <View style={{ paddingTop: 20 }}>
                <ScrollView
                    horizontal
                    overScrollMode='never'
                    showsHorizontalScrollIndicator={false}>
                    {theArray?.map(({ date, days }, index) => (
                        <ForecastItems key={index} {...{ date, days }} />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
};
