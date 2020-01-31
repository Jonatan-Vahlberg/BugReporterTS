import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

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

class AuthScreen extends React.Component<{}, AuthState> {
  constructor(props: object) {
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
    return null;
  }
}

export default AuthScreen;
