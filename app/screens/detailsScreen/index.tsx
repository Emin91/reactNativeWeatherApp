import React, { FC, useMemo } from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { SharedElement } from 'react-navigation-shared-element';
import { weatherIcons } from '../mainScreen/generateWeatherIcons';
import { FeelsLikeIcon } from '../../assets/svg/feelsLikeIcon';
import { WindSpeedIcon } from '../../assets/svg/windSpeedIcon';
import { IWeatherItem } from '../../interfaces/IWeatherItem';
import { HumidityIcon } from '../../assets/svg/humidityIcon';
import { GradientText } from '../../components/gradientText';
import { PressureIcon } from '../../assets/svg/pressureIcon';
import { TempMaxIcon } from '../../assets/svg/tempMaxIcon';
import { TempMinIcon } from '../../assets/svg/tempMinIcon';
import { MainHeader } from '../../components/mainHeader';
import * as Animatable from 'react-native-animatable';
import { BackIcon } from '../../assets/svg/backIcon';
import { IRoute } from '../../interfaces/IRoute';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const DetailsScreen: FC<Props> = ({ navigation, route }) => {
    const { data }: { data: IWeatherItem } = route.params;
    const styles = useMemo(() => getStyle(), []);
    
    const menuItems = [
        { title: 'Feels like', value: `${Math.round(data.main.feels_like)}°c`, icon: <FeelsLikeIcon /> },
        { title: 'Pressure', value: `${data.main.pressure} Pa`, icon: <PressureIcon /> },
        { title: 'Humidity', value: `${data.main.humidity}%`, icon: <HumidityIcon /> },
        { title: 'Wind speed', value: `${data.wind.speed} m/s`, icon: <WindSpeedIcon /> },
        { title: 'Temperature Max', value: `${Math.round(data.main.temp_max)}°c`, icon: <TempMaxIcon /> },
        { title: 'Temperature Min', value: `${Math.round(data.main.temp_min)}°c`, icon: <TempMinIcon /> },
    ];

    return (
        <View style={styles.container}>
            <Animatable.View
                delay={150}
                duration={300}
                animation={'fadeIn'}>
                <View style={styles.navigationHeader}>
                    <Pressable onPress={() => navigation.goBack()} style={(({ pressed }) => [styles.backIcon, { opacity: pressed ? 0.7 : 1 }])}>
                        <BackIcon />
                    </Pressable>
                    <Text numberOfLines={1} style={styles.detailsText}>Details</Text>
                </View>
            </Animatable.View>
            <View style={styles.weatherIconWrapper}>
                <SharedElement id={`item.mainIcon`}>
                    <Image resizeMode='contain' style={styles.weatherIcon} source={weatherIcons[data.weather[0].icon]} />
                </SharedElement>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <SharedElement id={`item.temperatureText`}>
                        <GradientText style={styles.temperatureText}>{Math.round(data.main.temp)}°c</GradientText>
                    </SharedElement>
                    <SharedElement id={`item.weatherState`}>
                        <Text numberOfLines={1} style={styles.detailsText}>{data.weather[0].description}</Text>
                    </SharedElement>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                <SharedElement id={`item.mainHeader`}>
                    <MainHeader {...{ weather: data }} />
                </SharedElement>
            </View>
            <View style={styles.infoWrapper}>
                {menuItems.map(({ title, value, icon }) => (
                    <View key={title} style={styles.infoRowWrapper}>
                        <View style={styles.infoTextWrapper}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        </View>
                        <View style={styles.infoIconWrapper}>
                            <Text numberOfLines={1} style={[styles.title, { marginRight: 10 }]}>{value}</Text>
                            {icon}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
};
