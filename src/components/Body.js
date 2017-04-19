import React from 'react';
import { View } from 'react-native';
import { sharedStyles } from '../utils';

const Body = ({ children }) => (
  <View style={sharedStyles.bodyStyle}>
    { children }
  </View>
);

export { Body };
