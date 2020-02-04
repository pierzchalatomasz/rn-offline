import { View } from 'react-native';

export const ReduxNetworkProvider = View;

export const createReducer = () => (state = {
  isConnected: true,
}) => state;

export const createNetworkMiddleware = () => () => next => action => {
  next(action);
};

export const offlineActionTypes = {
  FETCH_OFFLINE_MODE: 'FETCH_OFFLINE_MODE',
};
