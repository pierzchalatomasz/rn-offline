import { NativeModules } from 'react-native';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RNCNetInfoMock from './__mocks__/@react-native-community/net-info';

configure({ adapter: new Adapter() });

NativeModules.RNCNetInfo = RNCNetInfoMock;
