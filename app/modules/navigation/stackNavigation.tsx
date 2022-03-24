import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { MainScreen } from '../../screens/mainScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {

    return (
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
        })}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
    );
};
