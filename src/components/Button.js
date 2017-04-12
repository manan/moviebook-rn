import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/';

const Button = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={ onPress } style={[ styles.buttonStyle, style ]}>
    { children }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.THEME_RED,
    borderRadius: 5,
  }
});

export { Button };
