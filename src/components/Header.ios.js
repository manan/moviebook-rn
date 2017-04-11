import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

const Header = ({ children }) => (
  <View>
    <StatusBar backgroundColor="#23201F" barStyle="light-content"/>
    <View style={{height: 10, backgroundColor: '#23201F'}}/>
    <View style={styles.containerStyle}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23201F',
  }
});

export default Header;
