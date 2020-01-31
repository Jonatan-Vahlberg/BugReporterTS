import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from './auth/AuthScreen';

const drawerNavigator = createDrawerNavigator({});

const baseNavigator = createStackNavigator(
  {
    auth: {
      screen: AuthScreen,
    },
    mainDrawer: {
      screen: drawerNavigator,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(baseNavigator);
