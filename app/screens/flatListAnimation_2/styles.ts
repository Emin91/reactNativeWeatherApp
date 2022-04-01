import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
        },
        title: {
            fontSize: 14,
            lineHeight: 18,
            color: '#FFFFFF',
            fontFamily: FONTS.interLight,
        },
    });
    return styles;
};