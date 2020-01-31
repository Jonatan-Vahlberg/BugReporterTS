import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';

export interface AdminProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface AdminState {}

class TeamsAdminScreen extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
    this.state = {};
  }
  render() {
    return null;
  }
}

export default TeamsAdminScreen;
