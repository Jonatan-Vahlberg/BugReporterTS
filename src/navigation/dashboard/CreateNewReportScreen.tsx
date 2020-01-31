import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import { SeverityValue } from '../../models/BugReport';

export interface ReportProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface ReportState {
  title: string;
  content: string;
  labels?: string[];
  dueDate?: string;
  assgingedTo?: TeamMember;
  severity: SeverityValue;
}

class CreateNewReportScreen extends React.Component<ReportProps, ReportState> {
  constructor(props: ReportProps) {
    super(props);
    this.state = {
      title: '',
      content: '',
      labels: [],
      dueDate: null,
      assgingedTo: null,
      severity: SeverityValue.NONE,
    };
  }
  render() {
    return null;
  }
}

export default CreateNewReportScreen;
