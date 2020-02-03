import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import { SeverityValue } from '../../models/BugReport';
import { View, Text } from 'react-native';
import { titleRules } from '../../static/rules';

import { TextInput, FormError, Navbar, Button } from '../../components/common';

export interface ReportProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface ReportState {
  title: string;
  content: string;
  labelsValue?: string[];
  dueDate?: string;
  assgingedTo?: TeamMember;
  severity: SeverityValue;
  labels: string;
}

class CreateNewReportScreen extends React.Component<ReportProps, ReportState> {
  constructor(props: ReportProps) {
    super(props);
    this.state = {
      title: '',
      content: '',
      labelsValue: [],
      labels: '',
      dueDate: null,
      assgingedTo: null,
      severity: SeverityValue.NONE,
    };
  }
  render() {
    return (
      <View>
        <Navbar
          title="Create new report"
          navigation={this.props.navigation}
          root={false}
        />
        <TextInput
          value={this.state.title}
          name="title"
          setValue={this.setValue}
        />
        <FormError
          rules={{
            title: titleRules,
          }}
          values={[{ name: 'title', value: this.state.title }]}
          visible={false}
        />
        <TextInput
          value={this.state.content}
          name="content"
          setValue={this.setValue}
          numberOfLines={8}
        />
        <Text>Team options</Text>
        <Text>Advanced options</Text>
        <TextInput
          value={this.state.labels}
          name="labels"
          setValue={this.setValue}
        />
        <Button>
          <Text>Create</Text>
        </Button>
      </View>
    );
  }

  setValue = (key: keyof ReportState, value: any | string) => {
    this.setState({ [key]: value } as Pick<ReportState, keyof ReportState>);
  };
}

export default CreateNewReportScreen;
