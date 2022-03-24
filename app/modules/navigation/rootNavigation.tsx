import React, { FC } from 'react';
import { View } from 'react-native';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { useSelector, shallowEqual } from 'react-redux';
import { selectIsSplashLoaded } from '../redux/appState/selectors';
import { StackNavigator } from './stackNavigation';

const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = () => {
	const isSplashLoaded: boolean = useSelector(selectIsSplashLoaded, shallowEqual);

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer ref={navigationRef}>
				<StackNavigator />
			</NavigationContainer>
		</View>
	);
};
