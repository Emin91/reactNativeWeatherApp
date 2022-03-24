import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { store } from './modules/redux/store';

const App: FC = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor={'#111827'} barStyle={'light-content'} />
			<Provider store={store}>
				<RootNavigation />
			</Provider>
		</SafeAreaView>
	);
};

export default App;