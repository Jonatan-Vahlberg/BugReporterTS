import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import BugReport, { SeverityValue } from '../../models/BugReport';

type Params = { report: BugReport };

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
    return null;
  }
}

export default ViewReportScreen;
