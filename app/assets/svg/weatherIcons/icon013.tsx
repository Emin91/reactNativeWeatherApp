import React, { FC } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const Icon050: FC<{}> = () => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.9999 17.1081C27.9999 19.381 26.5216 21.2879 24.5 21.9304V23.9999C27.6452 23.3079 29.9999 20.4852 29.9999 17.1081C29.9999 13.2122 26.8659 10.054 22.9999 10.054C22.8016 10.054 22.6052 10.0623 22.4111 10.0786C20.9765 5.95612 17.0808 3 12.5 3C6.70101 3 2 7.73737 2 13.5812C2 17.9978 4.68511 21.7823 8.5 23.3676V21.1542C5.82613 19.712 4 16.868 4 13.5812C4 8.82738 7.82008 5 12.5 5C16.1234 5 19.2314 7.29436 20.45 10.5367L20.4583 10.5334C20.6894 11.1592 20.8514 11.8194 20.9349 12.5044C21.5654 12.2149 22.265 12.054 22.9999 12.054C25.7469 12.054 27.9999 14.3023 27.9999 17.1081ZM23 18H13V20H23V18ZM21 22H11V24H21V22ZM13 26H23V28H13V26Z"
                fill="url(#paint0_linear_9_2192)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_9_2192"
                    x1={16}
                    y1={3}
                    x2={16}
                    y2={28}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#CED3EA" />
                    <Stop offset={1} stopColor="#7E83A9" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};
