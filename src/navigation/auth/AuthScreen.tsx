import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Navbar from '../../components/common/Navbar';
import { Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';
import { NavigationActions } from 'react-navigation';

export interface AuthProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface AuthState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  stayLoggedIn: boolean;
  loading: boolean;
}

class AuthScreen extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      stayLoggedIn: false,
      loading: false,
    };
  }
  render() {
    return (
      <Button
        title="Login"
        onPress={() =>
          this.props.navigation.navigate(
            NavigationPaths.drawerStack,
            {},
            NavigationActions.navigate({
              routeName: NavigationPaths.dashboard,
            }),
          )
        }
      />
    );
  }
}

export default AuthScreen;
