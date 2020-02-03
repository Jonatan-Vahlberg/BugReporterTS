import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import Navbar from '../../components/common/Navbar';
import { View, Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';

export interface DashProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface DashState {}

class DashboardScreen extends React.Component<DashProps, DashState> {
  constructor(props: DashProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <Navbar
          title="Dashboard"
          navigation={this.props.navigation}
          root={true}
        />
        <Button
          title="Create"
          onPress={() =>
            this.props.navigation.navigate(NavigationPaths.createReport)
          }
        />
        <Button
          title="view"
          onPress={() =>
            this.props.navigation.navigate(NavigationPaths.viewReport)
          }
        />
      </View>
    );
  }

  renderDashboardTeam = () => {};
  renderDashboardNoTeam = (featuredTeam: Team) => {};
}

export default DashboardScreen;
