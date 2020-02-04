import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import { Navbar } from '../../components/common';
type Params = { team: Team };
export interface DetailProps {
  navigation: NavigationStackProp<Params>;
  [x: string]: any;
}

export interface DetailState {}

class TeamDetailScreen extends React.Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar
        title="TEAM_PLACEHOLDER"
        navigation={this.props.navigation}
        root={false}
      />
    );
  }
}

export default TeamDetailScreen;
