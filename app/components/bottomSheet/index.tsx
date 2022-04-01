import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { getStyle } from './styles';

interface Props {
    children: React.ReactNode;
};

export const BottomSheet: FC<Props> = ({ children }) => {
    const { height: SCREEN_HEIGHT } = Dimensions.get('window');
    const styles = useMemo(() => getStyle(), []);
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });
    const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 80;

    const scrollTo = useCallback((toValue) => {
        "worklet"
        translateY.value = withSpring(toValue, { damping: 50 });
    }, []);

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                scrollTo(0);
            } else if (translateY.value < -SCREEN_HEIGHT / 3) {
                scrollTo(MAX_TRANSLATE_Y);
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [16, 5],
            Extrapolate.CLAMP,
        );
        const animatedBackground = interpolateColor(translateY.value, [0, MAX_TRANSLATE_Y / 4], ['#333333', 'white']);
        return {
            backgroundColor: animatedBackground,
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            transform: [{ translateY: translateY.value }]
        };
    });

    return (
        <Animated.View style={[styles.container, { height: SCREEN_HEIGHT, top: SCREEN_HEIGHT / 1.06 }, animatedStyle]}>
            <GestureDetector gesture={gesture}>
                <View style={styles.lineWrapper}>
                    <View style={styles.line} />
                </View>
            </GestureDetector>
            <ScrollView
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {children}
            </ScrollView>
        </Animated.View>
    )
};
