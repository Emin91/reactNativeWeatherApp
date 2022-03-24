import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { LocationIcon } from '../../assets/svg/locationIcon';
import { getStyle } from './styles';

export const MainHeader: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date();

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.dateText}>{monthNames[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</Text>
                <Text numberOfLines={1} style={styles.locationText}>Baku</Text>
            </View>
            <Pressable style={(({pressed}) => [styles.iconWrapper, {opacity: pressed ? 0.7 : 1}])}>
                <LocationIcon />
            </Pressable>
        </View>
    )
};
