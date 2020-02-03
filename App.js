/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxNetworkProvider } from 'react-native-offline';

import configureStore from './configureStore';
import Sample from './src/components/Sample/Sample';

import SplashScreen from 'react-native-splash-screen';

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
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Sample />
      {/* </PersistGate> */}
    </ReduxNetworkProvider>
  </Provider>
);
}
export default App;
