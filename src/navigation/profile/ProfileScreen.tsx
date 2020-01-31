import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
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
    return null;
  }
}

export default ProfileScreen;
