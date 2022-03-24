import MaskedView from '@react-native-community/masked-view';
import React, { FC } from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    style: object;
};

export const GradientText: FC<Props> = (props: any) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                useAngle
                angle={0}
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 0 }}
                colors={["#525252", "#6D6D6D", "#F9F9F9"]}>
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    )
};
