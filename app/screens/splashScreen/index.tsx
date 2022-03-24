import React, { FC, useEffect, useMemo } from 'react';
import { Image, StatusBar, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import { IMAGES } from '../../assets/images';
import { setIsSplashLoaded } from '../../modules/redux/appState/actions';
import { getStyle } from './styles';

export const SplashScreen: FC = () => {
    const dispatch = useDispatch();
    const styles = useMemo(() => getStyle(), []);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setIsSplashLoaded(true));
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ImageBackground source={IMAGES.launch} style={styles.container}>
            <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
            <Image source={IMAGES.logo} style={styles.logo} />
        </ImageBackground>
    )
};
