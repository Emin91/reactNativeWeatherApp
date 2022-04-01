import React, { FC } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from '@react-navigation/stack';
import { WeatherDetailsScreen } from '../../screens/weatherDetailsScreen';
import { WeatherMainScreen } from '../../screens/weatherMainScreen';
import { MainScreen } from '../../screens/mainScreen';
import { FlatListAnimation_1 } from '../../screens/flatListAnimation_1';
import { FlatListAnimation_2 } from '../../screens/flatListAnimation_2';
import { ListDetailsScreen } from '../../screens/flatListAnimation_2/listDetailsScreen';
import { ImageScalingScreen } from '../../screens/imageScalingScreen';

const Stack = createSharedElementStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
        })}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="WeatherMainScreen" component={WeatherMainScreen} />
            <Stack.Screen name="FlatListAnimation_1" component={FlatListAnimation_1} />
            <Stack.Screen name="FlatListAnimation_2" component={FlatListAnimation_2} />
            <Stack.Screen name="ImageScalingScreen" component={ImageScalingScreen} />
            <Stack.Screen
                name="WeatherDetailsScreen"
                options={{
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 400 } },
                        close: { animation: 'timing', config: { duration: 400 } }
                    },
                    cardStyle: { backgroundColor: 'white' },
                    cardStyleInterpolator: ({ current: { progress } }) => { return { cardStyle: { opacity: progress } } }
                }}
                component={WeatherDetailsScreen} sharedElements={() => {
                    return [
                        {
                            id: `item.mainIcon`,
                            animation: 'fade-in',
                            resize: 'clip',
                            align: 'center-top',
                        },
                        {
                            id: `item.mainHeader`,
                            animation: 'move',
                            align: 'center-top',
                        },
                        {
                            id: `item.temperatureText`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                        {
                            id: `item.weatherState`,
                            animation: 'fade-in',
                            align: 'center-top',
                        },
                    ];
                }} />
            <Stack.Screen
                name="ListDetailsScreen"
                options={{
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 400 } },
                        close: { animation: 'timing', config: { duration: 300 } }
                    },
                    cardStyle: { backgroundColor: 'transparent' },
                    cardStyleInterpolator: ({ current: { progress } }) => { return { cardStyle: { opacity: progress } } }
                }}
                component={ListDetailsScreen} sharedElements={(route) => {
                    const { data } = route.params;
                    return [
                        {
                            id: `item.${data.id}.wallpaper`,
                            animation: 'fade-in',
                            resize: 'clip',
                        },
                    ];
                }} />
        </Stack.Navigator>
    );
};
