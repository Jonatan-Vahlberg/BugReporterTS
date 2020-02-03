import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { NavigationStackProp } from 'react-navigation-stack';
import { Params } from '../../navigation/dashboard/ViewReportScreen';

export interface NavProps {
  navigation:
    | NavigationDrawerProp
    | NavigationStackProp
    | NavigationStackProp<{}>;
  title?: string;
  root: boolean;
  color?: string;
}

const Navbar: React.FC<NavProps> = (props: NavProps) => {
  const action = props.root
    ? () => props.navigation.openDrawer()
    : () => (props.navigation as NavigationStackProp).pop();
  const Icon = (
    <TouchableOpacity onPress={action}>
      <MCIcon name={props.root ? 'menu' : 'keyboard-backspace'} size={40} />
    </TouchableOpacity>
  );

  return (
    <View style={navStyles.baseStyle}>
      <View style={navStyles.sideContainerStyle}>{Icon}</View>
      <View style={navStyles.titleContainerStyle}>
        <Text style={navStyles.titleStyle}>{props.title}</Text>
      </View>
      <View style={navStyles.sideContainerStyle}></View>
    </View>
  );
};

Navbar.defaultProps = {
  color: '#000',
};

const navStyles = StyleSheet.create({
  baseStyle: {
    height: 80,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 30,
    flexDirection: 'row',
    marginTop: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
    backgroundColor: '#fff',
  },
  titleContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 20,
  },
  sideContainerStyle: {
    width: 60,
  },
});

export default Navbar;
