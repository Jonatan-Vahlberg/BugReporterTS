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

import NavigationPaths from './NavigationPaths';

const dashboardStack = createStackNavigator(
  {
    [NavigationPaths.dashboard]: {
      screen: DashboardScreen,
    },
    [NavigationPaths.createReport]: {
      screen: CreateNewReportScreen,
    },
    [NavigationPaths.viewReport]: {
      screen: ViewReportScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const teamsStack = createStackNavigator(
  {
    [NavigationPaths.teamsList]: {
      screen: TeamsListScreen,
    },
    [NavigationPaths.teamsDetail]: {
      screen: TeamDetailScreen,
    },
    [NavigationPaths.teamsAdmin]: {
      screen: TeamsAdminScreen,
    },
    [NavigationPaths.teamsCreate]: {
      screen: CreateNewTeamScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const profileStack = createStackNavigator(
  {
    [NavigationPaths.profile]: {
      screen: ProfileScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const drawerNavigator = createDrawerNavigator({
  dashboardStack: {
    screen: dashboardStack,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  teamsStack: {
    screen: teamsStack,
    navigationOptions: {
      title: 'Teams',
    },
  },
  profileStack: {
    screen: profileStack,
    navigationOptions: {
      title: 'Profile',
    },
  },
});

const baseNavigator = createStackNavigator(
  {
    [NavigationPaths.authStack]: {
      screen: AuthScreen,
    },
    [NavigationPaths.drawerStack]: {
      screen: drawerNavigator,
    },
  },
  {
    initialRouteName: NavigationPaths.drawerStack,
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(baseNavigator);
