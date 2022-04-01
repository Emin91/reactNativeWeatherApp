import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { store } from './modules/redux/store';
import { Provider } from 'react-redux';

const App: FC = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
			<Provider store={store}>
				<RootNavigation />
			</Provider>
		</SafeAreaView>
	);
};

export default App;