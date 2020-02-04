import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import { Navbar, CheckBox } from '../../components/common';
import { View, Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';

export interface DashProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface DashState {
  stayLoggedIn: boolean;
}

class DashboardScreen extends React.Component<DashProps, DashState> {
  constructor(props: DashProps) {
    super(props);
    this.state = { stayLoggedIn: false };
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
        <CheckBox
          name="stayLoggedIn"
          checked={this.state.stayLoggedIn}
          setValue={this.setValue}
        />
      </View>
    );
  }
  setValue = (key: keyof DashState, value: any | string | boolean) => {
    console.log(value);

    this.setState({ [key]: value } as Pick<DashState, keyof DashState>);
    console.log(this.state.stayLoggedIn);
  };
  renderDashboardTeam = () => {};
  renderDashboardNoTeam = (featuredTeam: Team) => {};
}

export default DashboardScreen;
