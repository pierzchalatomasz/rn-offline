import * as actions from './sample';

describe('sample actions', () => {
  it('create sample fetch success action', () => {
    const data = {
      key1: 'val1',
      key2: 'val2',
    };
    const expectedAction = {
      type: actions.SAMPLE_FETCH_SUCCESS,
      data,
    };

    expect(actions.sampleFetchSuccess(data)).toEqual(expectedAction);
  });
});
