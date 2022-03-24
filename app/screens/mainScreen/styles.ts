import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: '#111827',
        },
        weatherIconWrapper: {
            height: 300,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        weatherIcon: {
            width: 300,
            height: 300,
        },
        temperatureText: {
            fontSize: 120,
            lineHeight: 124,
            marginTop: 20,
            color: '#9CA3AF',
            fontFamily: FONTS.interBold,
        },
        weatherStateText: {
            fontSize: 20,
            lineHeight: 24,
            color: '#FF8E27',
            fontFamily: FONTS.interBold,
        },
        forecastText: {
            fontSize: 20,
            lineHeight: 24,
            marginTop: 10,
            color: '#E07256',
            fontFamily: FONTS.interBold,
        },
    });
    return styles;
};