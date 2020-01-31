import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';

import rootReducer from './src/reducers';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const middlewares = [
  networkMiddleware, // it has to be the first one
  thunkMiddleware,
];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
