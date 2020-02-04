import React from 'react';
import { Button } from 'react-native';
import { shallow } from 'enzyme';

import { PureSample } from './Sample';

describe('Sample', () => {
  it('calls sampleFetch prop on button press', () => {
    const sampleFetch = jest.fn();
    const wrapper = shallow(
      <PureSample
        sampleFetch={sampleFetch}
        loading={false}
        isConnected
      />,
    );

    wrapper.find(Button).props().onPress();

    expect(sampleFetch).toBeCalled();
  });
});
