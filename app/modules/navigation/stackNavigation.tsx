import React, { FC } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from '@react-navigation/stack';
import { DetailsScreen } from '../../screens/detailsScreen';
import { MainScreen } from '../../screens/mainScreen';

const Stack = createSharedElementStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
        })}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen
                name="DetailsScreen"
                options={{
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 400 } },
                        close: { animation: 'timing', config: { duration: 400 } }
                    },
                    cardStyle: { backgroundColor: 'transparent' },
                    cardStyleInterpolator: ({ current: { progress } }) => { return { cardStyle: { opacity: progress } } }
                }}
                component={DetailsScreen} sharedElements={() => {
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
        </Stack.Navigator>
    );
};
