import React from 'react'
import { View, StyleSheet } from 'react-native'

const Body = ({ children }) => (
  <View style={ styles.containerStyle }>
    { children }
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  }
});

export { Body };
