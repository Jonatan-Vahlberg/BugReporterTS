import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import { Navbar } from '../../components/common';

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
    return (
      <Navbar
        title="Join/Create team"
        navigation={this.props.navigation}
        root={false}
      />
    );
  }
}

export default TeamsAdminScreen;
