import { useNavigation } from '@react-navigation/native';
import React, { FC, useMemo } from 'react';
import { Text, Pressable, Image } from 'react-native';
import { Icon01 } from '../../assets/svg/weatherIcons/icon01';
import { IStackNavigation } from '../../interfaces/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    date: string;
    days: string;
};

export const ForecastItems: FC<Props> = ({ days, date }) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: IStackNavigation = useNavigation();

    return (
        <Pressable
            // onPress={() => navigation.navigate('')}
            style={(({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1, }])}>
            <Text numberOfLines={1} style={styles.days}>{days}</Text>
            <Text numberOfLines={1} style={styles.date}>{date}</Text>
            <Icon01 />
        </Pressable>
    )
};
