import { retriableAction } from '../utils/network';

export const SAMPLE_FETCH = 'SAMPLE_FETCH';
export const SAMPLE_FETCH_SUCCESS = 'SAMPLE_FETCH_SUCCESS';
export const SAMPLE_FETCH_ERROR = 'SAMPLE_FETCH_ERROR';

export const sampleFetchSuccess = data => ({
  type: SAMPLE_FETCH_SUCCESS,
  data,
});

export const sampleFetchError = data => ({
  type: SAMPLE_FETCH_ERROR,
  data,
});

export const sampleFetch = retriableAction(
  'sampleFetch',
  url => dispatch => {
    dispatch({
      type: SAMPLE_FETCH,
    });

    return fetch(url)
      .then(res => res.json())
      .then(
        data => dispatch(sampleFetchSuccess(data)),
        error => sampleFetchError(error),
      );
  },
);
