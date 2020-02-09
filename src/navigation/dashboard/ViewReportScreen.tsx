import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import BugReport, { SeverityValue } from '../../models/BugReport';
import { Navbar, ScreenComponent } from '../../components/common';
import BugReportListCard from '../../components/bugreport/BugReportListCard';
import { View } from 'react-native';
import CommentWritingBox from '../../components/bugreport/CommentWritingBox';
import { ScrollView } from 'react-native-gesture-handler';

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
    const report = this.props.navigation.getParam('report');
    return (
      <ScreenComponent>
        <Navbar navigation={this.props.navigation} title="" root={false} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ScrollView>
            <BugReportListCard report={report} detail={true} />
            <CommentWritingBox
              setValue={this.setValue}
              name="comment"
              value={this.state.comment}
            />
          </ScrollView>
        </View>
      </ScreenComponent>
    );
  }

  setValue = (name: keyof ReportState, value: string) => {
    this.setState({ [name]: value } as Pick<ReportState, keyof ReportState>);
  };
}

export default ViewReportScreen;
