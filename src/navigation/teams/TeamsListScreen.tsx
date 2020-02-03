import * as React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Navbar from '../../components/common/Navbar';
import { View, Button } from 'react-native';
import NavigationPaths from '../NavigationPaths';

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
    return (
      <View>
        <Navbar title="Your Teams" navigation={this.props.navigation} root />
        <Button
          title="Create"
          onPress={() =>
            this.props.navigation.navigate(NavigationPaths.teamsCreate)
          }
        />
        <Button
          title="view"
          onPress={() =>
            this.props.navigation.navigate(NavigationPaths.teamsDetail)
          }
        />
        <Button
          title="admin"
          onPress={() =>
            this.props.navigation.navigate(NavigationPaths.teamsAdmin)
          }
        />
      </View>
    );
  }
}

export default TeamsListScreen;
