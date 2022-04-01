import React, { FC, useMemo, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { IRoute } from '../../interfaces/IRoute';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const ImageScalingScreen: FC<Props> = ({ }) => {
    const styles = useMemo(() => getStyle(), []);
    const [size, setSize] = useState(40);
    const [color, setColor] = useState('blue');
    const scaleImg = useSharedValue(0.7);

    const animImageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleImg.value }]
        }
    }, []);

    const onIncreaseSize = (size: number) => {
        setSize(size);
        switch (size) {
            case 40: scaleImg.value = withSpring(0.7, { stiffness: 70 }); break;
            case 44: scaleImg.value = withSpring(0.9, { stiffness: 70 }); break;
            case 48: scaleImg.value = withSpring(1.1, { stiffness: 70 }); break;
            case 52: scaleImg.value = withSpring(1.3, { stiffness: 70 }); break;
            default: break;
        };
    };

    const onChangeColor = (shoesColor: string) => {
        setColor(shoesColor);
    };

    const images = {
        blue: require('../../assets/images/nike_blue.png'),
        cyan: require('../../assets/images/nike_cyan.png'),
        green: require('../../assets/images/nike_green.png'),
        pink: require('../../assets/images/nike_pink.png'),
        red: require('../../assets/images/nike_red.png'),
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[animImageStyle]}>
                <Image source={images[color]} style={{ width: 350, height: 350 }} />
            </Animated.View>
            <View style={{ position: 'absolute', zIndex: 10, bottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text onPress={() => onIncreaseSize(40)} style={{ fontSize: 24, marginHorizontal: 10 }}>40</Text>
                    <Text onPress={() => onIncreaseSize(44)} style={{ fontSize: 24, marginHorizontal: 10 }}>44</Text>
                    <Text onPress={() => onIncreaseSize(48)} style={{ fontSize: 24, marginHorizontal: 10 }}>48</Text>
                    <Text onPress={() => onIncreaseSize(52)} style={{ fontSize: 24, marginHorizontal: 10 }}>52</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text onPress={() => onChangeColor('blue')} style={{ fontSize: 24, marginHorizontal: 10 }}>blue</Text>
                    <Text onPress={() => onChangeColor('cyan')} style={{ fontSize: 24, marginHorizontal: 10 }}>cyan</Text>
                    <Text onPress={() => onChangeColor('green')} style={{ fontSize: 24, marginHorizontal: 10 }}>green</Text>
                    <Text onPress={() => onChangeColor('pink')} style={{ fontSize: 24, marginHorizontal: 10 }}>pink</Text>
                    <Text onPress={() => onChangeColor('red')} style={{ fontSize: 24, marginHorizontal: 10 }}>red</Text>
                </View>
            </View>
        </View>
    );
};