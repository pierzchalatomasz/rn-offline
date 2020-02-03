import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';

import actions from './src/actions';
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

// Transform how the persistor reads the network state
const networkTransform = createTransform(
  inboundState => {
    const actionQueue = [];

    inboundState.actionQueue.forEach(action => {
      if (typeof action === 'function') {
        actionQueue.push({
          function: action.meta.name,
          args: action.meta.args,
        });
      } else if (typeof action === 'object') {
        actionQueue.push(action);
      }
    });

    return {
      ...inboundState,
      actionQueue,
    };
  },
  outboundState => {
    const actionQueue = [];

    outboundState.actionQueue.forEach(action => {
      if (action.function) {
        const actionFunction = actions[action.function];
        actionQueue.push(actionFunction(...action.args));
      } else {
        actionQueue.push(action);
      }
    });

    return { ...outboundState, actionQueue };
  },
  // The 'network' key may change depending on what you
  // named your network reducer.
  { whitelist: ['network'] },
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [networkTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
