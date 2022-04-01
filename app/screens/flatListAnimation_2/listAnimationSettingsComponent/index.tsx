import React, { FC, useMemo, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAnimationAutoPlay, setImageOpacity, setImageScale, setImageTranslateX } from './listAnimationSettingsStore/actions';
import { selectAnimationAutoPlay, selectImageSettings } from './listAnimationSettingsStore/selectors';
import Slider from '@react-native-community/slider';
import { getStyle } from './styles';

interface Props {
}

export const ListAnimationSettingsComponent: FC<Props> = ({ }) => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();
    const { scale, opacity, translateX } = useSelector(selectImageSettings, shallowEqual);
    const autoPlay: boolean = useSelector(selectAnimationAutoPlay, shallowEqual);
    const [imgScale, setImgScale] = useState<{ s: number, m: number, e: number }>({ s: scale[0] || 0, m: scale[1] || 0, e: scale[2] || 0 });
    const [imgOpacity, setImgOpacity] = useState<{ s: number, m: number, e: number }>({ s: opacity[0] || 0, m: opacity[1] || 0, e: opacity[2] || 0 });
    const [imgTranslateX, setImgTranslateX] = useState<{ s: number, m: number, e: number }>({ s: translateX[0] || 0, m: translateX[1] || 0, e: translateX[2] || 0 });

    const onSaveSettings = () => {
        dispatch(setImageScale(Object.values(imgScale)));
        dispatch(setImageTranslateX(Object.values(imgTranslateX)));
        dispatch(setImageOpacity(Object.values(imgOpacity)));
    };

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.label}>Image scale: {`[prev: ${imgScale.s}, current: ${imgScale.m}, next: ${imgScale.e}]`}</Text>
                <View style={styles.sliderRow}>
                    <Slider minimumValue={-3} maximumValue={3} value={imgScale.s} onValueChange={(number: number) => setImgScale({ ...imgScale, s: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={-3} maximumValue={3} value={imgScale.m} onValueChange={(number: number) => setImgScale({ ...imgScale, m: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={-3} maximumValue={3} value={imgScale.e} onValueChange={(number: number) => setImgScale({ ...imgScale, e: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.label}>Image opacity: {`[prev: ${imgOpacity.s}, current: ${imgOpacity.m}, next: ${imgOpacity.e}]`}</Text>
                <View style={styles.sliderRow}>
                    <Slider minimumValue={0} maximumValue={1} value={imgOpacity.s} onValueChange={(number: number) => setImgOpacity({ ...imgOpacity, s: Number(number.toFixed(1)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={0} maximumValue={1} value={imgOpacity.m} onValueChange={(number: number) => setImgOpacity({ ...imgOpacity, m: Number(number.toFixed(1)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={0} maximumValue={1} value={imgOpacity.e} onValueChange={(number: number) => setImgOpacity({ ...imgOpacity, e: Number(number.toFixed(1)) })} style={{ width: '100%', height: 20 }} />
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.label}>Image translateX: {`[prev: ${imgTranslateX.s}, current: ${imgTranslateX.m}, next: ${imgTranslateX.e}]`}</Text>
                <View style={styles.sliderRow}>
                    <Slider minimumValue={-300} maximumValue={300} value={imgTranslateX.s} onValueChange={(number: number) => setImgTranslateX({ ...imgTranslateX, s: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={-300} maximumValue={300} value={imgTranslateX.m} onValueChange={(number: number) => setImgTranslateX({ ...imgTranslateX, m: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                    <Slider minimumValue={-300} maximumValue={300} value={imgTranslateX.e} onValueChange={(number: number) => setImgTranslateX({ ...imgTranslateX, e: Number(number.toFixed(2)) })} style={{ width: '100%', height: 20 }} />
                </View>
            </View>
            <Button title={`auto play: ${autoPlay}`} color={!autoPlay ? 'red' : 'green'} onPress={() => dispatch(setAnimationAutoPlay(!autoPlay))} />
            <Button title='save' onPress={onSaveSettings} />
        </View>
    );
};