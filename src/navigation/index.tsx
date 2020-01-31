import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './auth/AuthScreen';

import DashboardScreen from './dashboard/DashboardScreen';
import CreateNewReportScreen from './dashboard/CreateNewReportScreen';
import ViewReportScreen from './dashboard/ViewReportScreen';

import ProfileScreen from './profile/ProfileScreen';

import TeamsListScreen from './teams/TeamsListScreen';
import TeamDetailScreen from './teams/TeamDetailScreen';
import TeamsAdminScreen from './teams/TeamsAdminScreen';
import CreateNewTeamScreen from './teams/CreateNewTeamScreen';

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

const teamsStack = createStackNavigator({
  teamsList: {
    screen: TeamsListScreen,
  },
  teamDetail: {
    screen: TeamDetailScreen,
  },
  teamsAdmin: {
    screen: TeamsAdminScreen,
  },
  teamsCreateNew: {
    screen: CreateNewTeamScreen,
  },
});

const profileStack = createStackNavigator({
  profile: {
    screen: ProfileScreen,
  },
});

const drawerNavigator = createDrawerNavigator({
  dashboardStack: dashboardStack,
  teamsStack: teamsStack,
  profileStack: profileStack,
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
