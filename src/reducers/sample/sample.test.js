import * as actions from '../../actions/sample/sample';

import reducer from './sample';

describe('sample reducer', () => {
  it('returns the initial state', () => {
    // eslint-disable-next-line no-undefined
    expect(reducer(undefined, {})).toEqual(
      {
        data: null,
        loading: false,
      },
    );
  });

  it('handles SAMPLE_FETCH_SUCCESS', () => {
    const data= {
      key1: 'val1',
      key2: 'val2',
    };

    expect(
      reducer({}, {
        type: actions.SAMPLE_FETCH_SUCCESS,
        data,
      }),
    ).toEqual({
      loading: false,
      data,
    });
  });
});
