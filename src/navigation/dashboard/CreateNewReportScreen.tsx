import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Team from '../../models/Team';
import TeamMember from '../../models/TeamMember';
import { SeverityValue } from '../../models/BugReport';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { titleRules } from '../../static/rules';

import {
  TextInput,
  FormError,
  Navbar,
  Button,
  FormWrapper,
  ScreenComponent,
} from '../../components/common';
import metrics from '../../static/metrics';

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
      <ScreenComponent>
        <Navbar
          title="Create new report"
          navigation={this.props.navigation}
          root={false}
        />
        <ScrollView>
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
          <FormWrapper>
            <Text>Team options</Text>
          </FormWrapper>
          <FormWrapper>
            <Text>Advanced options</Text>
          </FormWrapper>
          <TextInput
            value={this.state.labels}
            name="labels"
            setValue={this.setValue}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button>
            <Text style={styles.buttonTextStyle}>Create Report</Text>
          </Button>
        </View>
      </ScreenComponent>
    );
  }

  setValue = (key: keyof ReportState, value: any | string) => {
    this.setState({ [key]: value } as Pick<ReportState, keyof ReportState>);
  };
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    right: -15,
  },
  buttonTextStyle: {
    fontWeight: '700',
    fontSize: 25,
    color: '#fff',
    letterSpacing: 1.4,
  },
});

export default CreateNewReportScreen;
