import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            position: 'absolute',
            zIndex: 200,
            elevation: 10
        },
        lineWrapper: {
            width: '100%',
            paddingVertical: 8,
            alignItems: 'center',
        },
        line: {
            width: 100,
            height: 5,
            borderRadius: 100,
            backgroundColor: '#5c5c5c',
        },
        locationText: {
            fontSize: 48,
            lineHeight: 52,
            color: '#FFFFFF',
            fontFamily: FONTS.interBold,
        },
    });
    return styles;
};