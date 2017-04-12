import React from 'react';
import { View } from 'react-native';

const Section = ({ children, style }) => (
  <View style={[ styles.containerStyle, style ]}>
    { children }
  </View>
);

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { Section };
