import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const LocationIcon: FC<{}> = () => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
        >
            <Path
                d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
                stroke="#9CA3AF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Circle
                cx={16}
                cy={13}
                r={2}
                stroke="#9CA3AF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
