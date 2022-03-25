import React, { FC } from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

export const HumidityIcon: FC<{}> = () => {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
        >
            <G clipPath="url(#clip0_415_4)">
                <Path
                    d="M10.2236 0.0864367C10.0966 -0.0288122 9.90325 -0.0288122 9.77628 0.0864367C9.63122 0.217248 6.31103 3.25178 4.7692 6.76884C4.60302 6.7105 4.41171 6.66678 4.16437 6.66678C3.58071 6.66678 3.26756 6.88456 3.01594 7.05968C2.79622 7.21268 2.62272 7.33343 2.24804 7.33343C1.87401 7.33343 1.70051 7.21265 1.48111 7.05999C1.2298 6.88487 0.916647 6.66678 0.33334 6.66678C0.149092 6.66678 0 6.81587 0 7.00012C0 7.18437 0.149092 7.33346 0.33334 7.33346C0.707368 7.33346 0.880866 7.45424 1.10027 7.60689C1.35158 7.78202 1.66473 8.00011 2.24804 8.00011C2.83169 8.00011 3.14516 7.78202 3.39678 7.60689C3.6165 7.45424 3.78999 7.33346 4.16437 7.33346C4.53936 7.33346 4.7132 7.45424 4.93323 7.60721C5.18486 7.78233 5.49832 8.00011 6.08231 8.00011C6.66597 8.00011 6.97943 7.78233 7.2314 7.60721C7.45111 7.45421 7.62496 7.33346 7.99995 7.33346C8.1842 7.33346 8.33329 7.18437 8.33329 7.00012C8.33329 6.81587 8.1842 6.66678 7.99995 6.66678C7.41599 6.66678 7.10249 6.88456 6.85056 7.05968C6.63084 7.21268 6.457 7.33343 6.08235 7.33343C5.7321 7.33343 5.55663 7.22659 5.35604 7.08799C6.60981 4.19236 9.22041 1.54223 9.99996 0.791492C11.038 1.79179 15.3333 6.16222 15.3333 10.0001C15.3333 12.9408 12.9407 15.3334 9.99996 15.3334C8.67257 15.3334 7.41658 14.8389 6.44437 13.9659C6.80506 13.8991 7.03793 13.7416 7.23143 13.6071C7.45115 13.4541 7.62499 13.3334 7.99998 13.3334C8.18423 13.3334 8.33332 13.1843 8.33332 13C8.33332 12.8158 8.18423 12.6667 7.99998 12.6667C7.41602 12.6667 7.10252 12.8845 6.85059 13.0596C6.63087 13.2126 6.45703 13.3333 6.08238 13.3333C5.70738 13.3333 5.53354 13.2126 5.31382 13.0596C5.06186 12.8845 4.74839 12.6667 4.16443 12.6667C3.58078 12.6667 3.26762 12.8845 3.016 13.0596C2.79628 13.2126 2.62279 13.3333 2.2481 13.3333C1.87408 13.3333 1.70058 13.2126 1.48117 13.0599C1.22986 12.8848 0.91671 12.6667 0.333403 12.6667C0.149155 12.6667 6.24994e-05 12.8158 6.24994e-05 13C6.24994e-05 13.1843 0.149155 13.3334 0.333403 13.3334C0.70743 13.3334 0.880929 13.4541 1.10033 13.6068C1.35164 13.7819 1.6648 14 2.2481 14C2.83175 14 3.14522 13.7819 3.39684 13.6068C3.61656 13.4541 3.79006 13.3334 4.16443 13.3334C4.53942 13.3334 4.71327 13.4541 4.9333 13.6071C5.06907 13.7016 5.22748 13.8057 5.43207 13.8841C6.57581 15.2278 8.23376 16 9.99996 16C13.3082 16 15.9999 13.3083 15.9999 10.0001C15.9999 5.36373 10.4592 0.299653 10.2236 0.0864367Z"
                    fill="white"
                />
                <Path
                    d="M0.333344 11.3334C0.707375 11.3334 0.880875 11.4542 1.10028 11.6069C1.35159 11.782 1.66475 12.0001 2.24806 12.0001C2.43231 12.0001 2.58141 11.851 2.58141 11.6667C2.58141 11.4825 2.43231 11.3334 2.24806 11.3334C1.87403 11.3334 1.70053 11.2126 1.48113 11.06C1.22981 10.8848 0.916657 10.6667 0.333344 10.6667C0.149094 10.6667 0 10.8158 0 11.0001C0 11.1843 0.149094 11.3334 0.333344 11.3334Z"
                    fill="white"
                />
                <Path
                    d="M4.1644 10.6667C3.98015 10.6667 3.83105 10.8158 3.83105 11.0001C3.83105 11.1843 3.98015 11.3334 4.1644 11.3334C4.53939 11.3334 4.71323 11.4542 4.93295 11.6072C5.18492 11.7823 5.49838 12.0001 6.08235 12.0001C6.666 12.0001 6.97946 11.7823 7.23143 11.6072C7.45114 11.4542 7.62499 11.3334 7.99998 11.3334C8.38117 11.3334 8.57516 11.4575 8.82029 11.6144C9.10316 11.795 9.42381 12.0001 9.99996 12.0001C10.1842 12.0001 10.3333 11.851 10.3333 11.6668C10.3333 11.4825 10.1842 11.3334 9.99996 11.3334C9.61878 11.3334 9.42478 11.2094 9.17966 11.0525C8.89679 10.8718 8.57613 10.6667 7.99998 10.6667C7.41602 10.6667 7.10252 10.8845 6.85059 11.0597C6.63087 11.2127 6.45703 11.3334 6.08238 11.3334C5.70738 11.3334 5.53354 11.2126 5.31351 11.0597C5.06186 10.8845 4.74839 10.6667 4.1644 10.6667Z"
                    fill="white"
                />
                <Path
                    d="M4.16437 8.66675C3.58072 8.66675 3.26756 8.88453 3.01594 9.05965C2.79622 9.21265 2.62273 9.3334 2.24804 9.3334C1.87401 9.3334 1.70052 9.21262 1.48111 9.05996C1.2298 8.88484 0.916648 8.66675 0.333341 8.66675C0.149092 8.66675 0 8.81584 0 9.00009C0 9.18434 0.149092 9.33343 0.333341 9.33343C0.707368 9.33343 0.880867 9.45421 1.10027 9.60687C1.35158 9.78199 1.66473 10.0001 2.24804 10.0001C2.83169 10.0001 3.14516 9.78199 3.39678 9.60687C3.6165 9.45421 3.79 9.33343 4.16437 9.33343C4.34862 9.33343 4.49771 9.18434 4.49771 9.00009C4.49771 8.81581 4.34862 8.66675 4.16437 8.66675Z"
                    fill="white"
                />
                <Path
                    d="M7.23141 9.60718C7.45113 9.45418 7.62497 9.33343 7.99997 9.33343C8.374 9.33343 8.5475 9.45421 8.7669 9.60686C9.01821 9.78199 9.33136 10.0001 9.91467 10.0001C10.4983 10.0001 10.8118 9.78199 11.0634 9.60686C11.2831 9.45421 11.4566 9.33343 11.831 9.33343C12.0152 9.33343 12.1643 9.18434 12.1643 9.00009C12.1643 8.81584 12.0152 8.66675 11.831 8.66675C11.2473 8.66675 10.9342 8.88453 10.6826 9.05965C10.4629 9.21265 10.2894 9.3334 9.91467 9.3334C9.54064 9.3334 9.36714 9.21262 9.14774 9.05996C8.89643 8.88484 8.58328 8.66675 7.99997 8.66675C7.41601 8.66675 7.10251 8.88453 6.85057 9.05965C6.63086 9.21265 6.45702 9.3334 6.08236 9.3334C5.89812 9.3334 5.74902 9.48249 5.74902 9.66674C5.74902 9.85099 5.89812 10.0001 6.08236 10.0001C6.66598 10.0001 6.97945 9.7823 7.23141 9.60718Z"
                    fill="white"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_415_4">
                    <Rect width={16} height={16} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
