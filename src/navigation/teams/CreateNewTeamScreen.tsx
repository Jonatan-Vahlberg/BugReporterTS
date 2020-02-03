import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import Navbar from '../../components/common/Navbar';
export type NewTeamParams = { update: boolean; team?: Team };
export interface AdminProps {
  navigation: NavigationStackProp<NewTeamParams>;
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
    return (
      <Navbar
        title="Create new team"
        navigation={this.props.navigation}
        root={false}
      />
    );
  }
}

export default CreateNewTeamScreen;
