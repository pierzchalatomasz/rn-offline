import { combineReducers } from 'redux';
import { createReducer as createNetworkReducer } from 'react-native-offline';

import sampleReducer from './sample';

const rootReducer = combineReducers({
  sample: sampleReducer,
  network: createNetworkReducer(),
});

export default rootReducer;
