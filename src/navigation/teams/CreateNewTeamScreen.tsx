import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
type Params = { update: boolean; team?: Team };
export interface AdminProps {
  navigation: NavigationStackProp<Params>;
  [x: string]: any;
}

export interface AdminState {
  name: string;
  description: string;
  teamMembers?: TeamMember[];
  update?: boolean;
  team?: Team;
}

class CreateNewTeamScreen extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
    const { navigation } = this.props;
    const update: boolean = navigation.getParam('update', false);
    const team: Team = navigation.getParam('team', null);
    if (update) {
      this.state = {
        name: team.name,
        description: team.description,
        teamMembers: team.members,
        update,
        team,
      };
    } else {
      this.state = {
        name: '',
        description: '',
        teamMembers: [],
      };
    }
  }
  render() {
    return null;
  }
}

export default CreateNewTeamScreen;
