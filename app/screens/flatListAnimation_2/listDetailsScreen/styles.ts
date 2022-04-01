import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'transparent',
        },
        backIcon: {
            top: 10,
            left: 10,
            zIndex: 10,
            position: 'absolute',
        },
        mainImage: {
            width: '100%',
            height: '100%',
        },
    });
    return styles;
};