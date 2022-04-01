import { StyleSheet } from 'react-native';
import { FONTS } from '../../../assets/fonts';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 10,
            paddingHorizontal: 10,
        },
        label: {
            fontSize: 14,
            lineHeight: 18,
            color: 'black',
            fontFamily: FONTS.interBold,
        },
        sliderRow: {
            // flexDirection: 'row',
            width: '100%',
            paddingTop: 10,
            // justifyContent: 'space-between'
        },
    });
    return styles;
};