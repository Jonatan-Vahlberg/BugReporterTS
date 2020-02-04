import * as React from 'react';
import { View } from 'react-native';
import metrics from '../../static/metrics';

const ScreenComponent: React.FC = props => {
  return (
    <View style={{ flex: 1, width: metrics.screenWidth }}>
      {props.children}
    </View>
  );
};

export { ScreenComponent };
