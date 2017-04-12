import React from 'react';
import { StyleSheet } from 'react-native'
import { Section, Spinner } from './';
import { colors } from '../utils';

const BoxSpinner = ({ size, style }) => (
  <Section style={[ styles.boxSpinnerStyle, style ]}>
    <Spinner size={ size }/>
  </Section>
);

const styles = StyleSheet.create({
  boxSpinnerStyle: {
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.THEME_RED
  }
})

export { BoxSpinner };
