import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { IWeatherItem } from '../../interfaces/IWeatherItem';
import { selectWeather } from '../../modules/redux/weather/selectors';
import LottieView from 'lottie-react-native';
import { getStyle } from './styles';

interface Props {
    weather: IWeatherItem;
};

export const MainHeader: FC<Props> = ({ }) => {
    const date = new Date();
    const weather: IWeatherItem = useSelector(selectWeather, shallowEqual);
    const styles = useMemo(() => getStyle(), []);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.dateText}>{monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</Text>
                <Text numberOfLines={1} style={styles.locationText}>{weather.name || ''}</Text>
            </View>
            <Pressable style={(({ pressed }) => [styles.iconWrapper, { opacity: pressed ? 0.7 : 1 }])}>
                <LottieView source={require('../../assets/wind.json')} style={{ width: 60, height: 50 }} autoPlay loop />
            </Pressable>
        </View>
    )
};
