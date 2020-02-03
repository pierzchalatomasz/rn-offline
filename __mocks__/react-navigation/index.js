
export const createAppContainer = jest.fn().mockReturnValue(function NavigationContainer() {
  return null;
});

export const createDrawerNavigator = jest.fn();

export const createMaterialTopTabNavigator = jest.fn();

export const createStackNavigator = jest.fn();

export const StackActions = {
  push: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
  replace: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
};

export const NavigationActions= {
  navigate: jest.fn().mockImplementation(x => x),
};
