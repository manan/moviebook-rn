import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../utils';

const Body = ({ children }) => (
  <View style={styles.containerStyle}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE
  }
});

export { Body };
