import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxNetworkProvider } from 'react-native-offline';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigation/AppNavigator';
import configureStore from './configureStore';

const { store, persistor } = configureStore();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ReduxNetworkProvider
        pingTimeout={10000}
        pingServerUrl="https://www.google.com/"
      >
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
};
export default App;
