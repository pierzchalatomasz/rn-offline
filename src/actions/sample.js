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

export const sampleFetch = () => retriableAction(
  dispatch => {
    dispatch({
      type: SAMPLE_FETCH,
    });

    return fetch('https://5e329d59b92d240014ea545c.mockapi.io/user')
      .then(res => res.json())
      .then(
        data => dispatch(sampleFetchSuccess(data)),
        error => sampleFetchError(error),
      );
  });
