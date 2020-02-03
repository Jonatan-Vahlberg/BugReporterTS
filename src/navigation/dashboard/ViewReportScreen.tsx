import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import BugReport, { SeverityValue } from '../../models/BugReport';
import Navbar from '../../components/common/Navbar';

export type Params = { report: BugReport };

export interface ReportProps {
  navigation: NavigationStackProp<Params>;
  [x: string]: any;
}

export interface ReportState {
  comment: string;
}

class ViewReportScreen extends React.Component<ReportProps, ReportState> {
  constructor(props: ReportProps) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  render() {
    return (
      <Navbar
        navigation={this.props.navigation}
        title="REPORT: #78247292"
        root={false}
      />
    );
  }
}

export default ViewReportScreen;
