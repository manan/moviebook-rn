import React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { colors } from '../utils/';

const Button = ({ children, onPress, disabled, style }) => (
  <TouchableOpacity
  onPress={onPress}
  disabled={disabled}
  style={disabled ? [styles.disabledButtonStyle, style] : [styles.buttonStyle, style]}
  >
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
  },
  disabledButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.THEME_RED_LIGHT,
    borderRadius: 5,
  }
});

export { Button };
