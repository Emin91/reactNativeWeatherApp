import React, { FC, useMemo } from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import { getStyle } from './styles';
import { BackIcon } from '../../../assets/svg/backIcon';
import { IRoute } from '../../../interfaces/IRoute';
import { IStackNavigation } from '../../../interfaces/IStackNavigation';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
};

export const ListDetailsScreen: FC<Props> = ({ navigation, route }) => {
    const { data } = route.params;
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <SharedElement id={`item.${data.id}.wallpaper`} style={[StyleSheet.absoluteFillObject]}>
                <Image resizeMode='cover' style={[StyleSheet.absoluteFillObject]} source={{ uri: data.wallpaper }} />
            </SharedElement>
            <Animatable.View
                delay={150}
                duration={300}
                animation={'fadeIn'}>
                <Pressable onPress={() => navigation.goBack()} style={(({ pressed }) => [styles.backIcon, { opacity: pressed ? 0.7 : 1 }])}>
                    <BackIcon />
                </Pressable>
            </Animatable.View>
        </View>
    )
};
