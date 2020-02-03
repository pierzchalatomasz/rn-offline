import { NativeModules } from 'react-native';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RNCNetInfoMock from './__mocks__/@react-native-community/net-info';

NativeModules.UIManager = NativeModules.UIManager || {};
NativeModules.UIManager.RCTView = NativeModules.UIManager.RCTView || {};
NativeModules.RNGestureHandlerModule = NativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),

};
NativeModules.PlatformConstants = NativeModules.PlatformConstants || {
  forceTouchAvailable: false,
};
NativeModules.RNCNetInfo = RNCNetInfoMock;

configure({ adapter: new Adapter() });

