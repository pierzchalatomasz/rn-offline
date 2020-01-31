import { SAMPLE_FETCH_SUCCESS, SAMPLE_FETCH } from '../actions/sample';

const initialState = {
  data: null,
  loading: false,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_FETCH:
      return { ...state, loading: true, data: null };
    case SAMPLE_FETCH_SUCCESS:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

export default sampleReducer;
