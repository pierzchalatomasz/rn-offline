import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

import DetailsScreen from './../screens/DetailsScreen';

const defaultNavOptions = {
  // headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  },
);

export default createAppContainer(AppNavigator);
