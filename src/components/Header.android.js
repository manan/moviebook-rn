import React from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'

const Header = ({ children }) => (
  <View>
    <StatusBar backgroundColor="#23201F" barStyle="light-content"/>
    <View style={styles.containerStyle}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23201F',
  }
});

export default Header;
