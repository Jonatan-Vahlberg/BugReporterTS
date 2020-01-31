import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from './auth/AuthScreen';
import DashboardScreen from './dashboard/DashboardScreen';
import CreateNewReportScreen from './dashboard/CreateNewReportScreen';
import ViewReportScreen from './dashboard/ViewReportScreen';

const dashboardStack = createStackNavigator({
  dashboard: {
    screen: DashboardScreen,
  },
  createReport: {
    screen: CreateNewReportScreen,
  },
  viewReport: {
    screen: ViewReportScreen,
  },
});

const drawerNavigator = createDrawerNavigator({
  dashboardStack: dashboardStack,
});

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
