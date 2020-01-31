import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
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
    return null;
  }
}

export default TeamDetailScreen;
