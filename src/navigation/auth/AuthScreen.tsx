import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';
import { NavigationActions } from 'react-navigation';
import {
  ScreenComponent,
  Card,
  TextInput,
  Navbar,
  LinkText,
} from '../../components/common';

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
      <ScreenComponent>
        <Card label="Login">
          <TextInput
            name="email"
            value={this.state.email}
            setValue={this.setValue}
          />
          <TextInput
            name="password"
            value={this.state.password}
            setValue={this.setValue}
          />
          <LinkText text="register?" />
        </Card>
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
      </ScreenComponent>
    );
  }
  setValue = (key: keyof AuthState, value: any | string) => {
    this.setState({ [key]: value } as Pick<AuthState, keyof AuthState>);
  };

  renderLogin = () => {};
  renderRegister = () => {};
}

export default AuthScreen;
