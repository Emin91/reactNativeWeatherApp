import React, { FC, memo } from 'react';
import { Button, View } from 'react-native';
import { IStackNavigation } from '../interfaces/IStackNavigation';

export const MainScreen: FC<any> = memo(({ navigation }: { navigation: IStackNavigation }) => {

    return (
        <View style={{}}>
            <Button title='Weather' onPress={() => navigation.navigate('WeatherMainScreen')} />
            <Button title='Image scaling' onPress={() => navigation.navigate('ImageScalingScreen')} />
            <Button title='FlatList - 1' onPress={() => navigation.navigate('FlatListAnimation_1')} />
            <Button title='FlatList - 2' onPress={() => navigation.navigate('FlatListAnimation_2')} />
        </View>
    )
});
