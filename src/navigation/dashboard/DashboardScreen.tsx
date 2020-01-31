import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';

export interface DashProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface DashState {}

class DashboardScreen extends React.Component<DashProps, DashState> {
  constructor(props: DashProps) {
    super(props);
    this.state = {};
  }
  render() {
    return null;
  }

  renderDashboardTeam = () => {};
  renderDashboardNoTeam = (featuredTeam: Team) => {};
}

export default DashboardScreen;
