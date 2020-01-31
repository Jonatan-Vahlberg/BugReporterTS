import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

export interface ListProps {
  navigation: NavigationStackProp;
  [x: string]: any;
}

export interface ListState {}

class TeamsListScreen extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {};
  }
  render() {
    return null;
  }
}

export default TeamsListScreen;
