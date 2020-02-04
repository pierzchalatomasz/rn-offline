import { offlineActionTypes } from 'react-native-offline';

import { SAMPLE_FETCH_SUCCESS, SAMPLE_FETCH } from '../../actions/sample/sample';

const initialState = {
  data: null,
  loading: false,
  notification: 0,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_FETCH:
      return { ...state, loading: true, data: null };
    case SAMPLE_FETCH_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return { ...state, notification: new Date().getTime() };
    default:
      return state;
  }
};

export default sampleReducer;
