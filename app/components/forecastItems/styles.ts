import { StyleSheet } from 'react-native';
import { FONTS } from '../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: 80,
            marginRight: 8,
            borderRadius: 4,
            paddingVertical: 8,
            alignItems: 'center',
            paddingHorizontal: 4,
            backgroundColor: '#0E0E20',
        },
        days: {
            fontSize: 18,
            lineHeight: 22,
            color: '#E07256',
            fontFamily: FONTS.interRegular,
        },
        date: {
            fontSize: 14,
            lineHeight: 18,
            color: '#EFC977',
            marginBottom: 10,
            fontFamily: FONTS.interRegular,
        },
        icon: {
            width: 40,
            height: 40,
        }
    });
    return styles;
};