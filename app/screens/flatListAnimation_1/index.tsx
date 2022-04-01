import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { View, FlatList, Dimensions, Animated } from 'react-native';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { IRoute } from '../../interfaces/IRoute';
import { FlowersList } from '../../../__mocks__/flowersList';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
}

export const FlatListAnimation_1: FC<Props> = ({  }) => {
    const { width } = Dimensions.get('screen');
    const styles = useMemo(() => getStyle(), []);
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(FlowersList);
    const scrollXIndex = useRef(new Animated.Value(0)).current;
    const scrollXAnimated = useRef(new Animated.Value(0)).current;

    const ITEM_WIDTH = width * 0.8;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
    const VISIBLE_ITEMS = 3;

    useEffect(() => {
        Animated.spring(scrollXAnimated, {
            toValue: scrollXIndex,
            speed: 1.5,
            velocity: 0.8,
            useNativeDriver: true,
        }).start();
        
        const timer = setInterval(() => {
            setCounter(prevCount => prevCount + 1);
        }, 2000);
        
        return () =>  clearInterval(timer);
    }, []);


    useEffect(() => {
        counter == data.length && setCounter(0);
        scrollXIndex.setValue(counter);
    }, [counter]);

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                inverted
                overScrollMode='never'
                scrollEnabled={false}
                removeClippedSubviews={false}
                data={data}
                contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: 20 }}
                CellRendererComponent={({ item, index, children, style, ...props }) => {
                    const newStyle = [style, { zIndex: data.length - index }];
                    return (
                        <View style={newStyle} {...{ index, props }}>
                            {children}
                        </View>
                    );
                }}
                renderItem={({ item, index }) => {
                    const inputRange = [index - 1, index, index + 1]
                    const translateX = scrollXAnimated.interpolate({
                        inputRange,
                        outputRange: [25, 0, -100]
                    })
                    const scale = scrollXAnimated.interpolate({
                        inputRange,
                        outputRange: [0.95, 1, 1.3]
                    })
                    const borderRadius = scrollXAnimated.interpolate({
                        inputRange,
                        outputRange: [14, 16, 10]
                    })
                    const opacity = scrollXAnimated.interpolate({
                        inputRange,
                        outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]
                    })
                    return <Animated.View style={{ position: 'absolute', opacity, left: -ITEM_WIDTH / 2, transform: [{ translateX }, { scale }] }}>
                        <Animated.Image
                            source={{ uri: item.wallpaper }}
                            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, borderRadius }}
                        />
                    </Animated.View>
                }}
            />
        </View>
    );
};