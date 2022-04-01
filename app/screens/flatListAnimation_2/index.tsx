import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, Animated, Image, Pressable } from 'react-native';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { IRoute } from '../../interfaces/IRoute';
import { FlowersList } from '../../../__mocks__/flowersList';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { getStyle } from './styles';
import { BottomSheet } from '../../components/bottomSheet';
import { ListAnimationSettingsComponent } from './listAnimationSettingsComponent';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAnimationAutoPlay, selectImageSettings } from './listAnimationSettingsComponent/listAnimationSettingsStore/selectors';
import { SharedElement } from 'react-navigation-shared-element';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const FlatListAnimation_2: FC<Props> = ({ navigation, route }) => {
    const { width, height } = Dimensions.get('screen');
    const styles = useMemo(() => getStyle(), []);
    const [data, setData] = useState(FlowersList);
    const [activeIdx, setActiveIdx] = useState(0);
    const scrollXIndex = useRef(new Animated.Value(0)).current;
    const scrollXAnimated = useRef(new Animated.Value(0)).current;
    const autoPlay: boolean = useSelector(selectAnimationAutoPlay, shallowEqual);
    const { scale, opacity, translateX } = useSelector(selectImageSettings, shallowEqual);

    const ITEM_WIDTH = width * 0.8;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

    const setActiveIndex = useCallback((activeIndex) => {
        setActiveIdx(activeIndex);
        scrollXIndex.setValue(activeIndex);
    }, []);

    useEffect(() => {
        Animated.spring(scrollXAnimated, {
            toValue: scrollXIndex,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            autoPlay && setActiveIdx(prev => prev + 1);
        }, 2000);
        activeIdx == data.length && setActiveIdx(0);
        autoPlay && scrollXIndex.setValue(activeIdx);
        return () => clearInterval(timer);
    }, [autoPlay, activeIdx]);

    return (
        <View style={styles.container}>
            <FlingGestureHandler
                key={'left'}
                direction={Directions.LEFT}
                onHandlerStateChange={(ev => {
                    if (ev.nativeEvent.state === State.END) {
                        if (activeIdx === data.length - 1) { return };
                        setActiveIndex(activeIdx + 1);
                    }
                })}>
                <FlingGestureHandler
                    key={'right'}
                    direction={Directions.RIGHT}
                    onHandlerStateChange={(ev => {
                        if (ev.nativeEvent.state === State.END) {
                            if (activeIdx === 0) { return };
                            setActiveIndex(activeIdx - 1);
                        }
                    })}>
                    <FlatList
                        horizontal
                        inverted
                        overScrollMode='never'
                        scrollEnabled={false}
                        removeClippedSubviews={false}
                        data={data}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: 20 }}
                        CellRendererComponent={({ item, index, children, style, ...props }) => {
                            const newStyle = [style, { zIndex: data.length - index }];
                            return (
                                <View style={newStyle} {...{ props }}>
                                    {children}
                                </View>
                            );
                        }}
                        renderItem={({ item, index }) => {
                            const animProps = (outputRange: number[]) => {
                                return scrollXAnimated.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange,
                                });
                            };
                            return <Animated.View style={{
                                position: 'absolute', opacity: animProps(opacity), left: -ITEM_WIDTH / 2, transform: [
                                    { translateX: animProps(translateX) },
                                    { scale: animProps(scale) }]
                            }}>
                                <Pressable onPress={() => navigation.push('ListDetailsScreen', { data: data[activeIdx] })}>
                                    <SharedElement id={`item.${item.id}.wallpaper`}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{ uri: item.wallpaper }}
                                            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, borderRadius: 10 }} />
                                    </SharedElement>
                                </Pressable>
                            </Animated.View>
                        }}
                    />
                </FlingGestureHandler>
            </FlingGestureHandler>
            <BottomSheet><ListAnimationSettingsComponent /></BottomSheet>
        </View >
    );
};