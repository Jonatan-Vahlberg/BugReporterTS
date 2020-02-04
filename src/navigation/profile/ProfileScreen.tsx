import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import { Navbar, ScreenComponent } from '../../components/common';
import { View, Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';
import { NavigationActions } from 'react-navigation';
type Params = { update: boolean; team?: Team };
export interface ProfileProps {
  navigation: NavigationStackProp<Params>;
  [x: string]: any;
}

export interface ProfileState {}

class ProfileScreen extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ScreenComponent>
        <Navbar title="Your profile" navigation={this.props.navigation} root />
        <Button
          title="Log out"
          onPress={() =>
            this.props.navigation.navigate(
              NavigationPaths.authStack,
              {},
              NavigationActions.navigate({ routeName: NavigationPaths.login }),
            )
          }
        />
      </ScreenComponent>
    );
  }
}

export default ProfileScreen;
