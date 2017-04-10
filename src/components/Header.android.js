import React from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'

const Header = () => (
  <View>
    <StatusBar backgroundColor="#23201F" barStyle="light-content"/>
    <View style={styles.container}>
      <Image style={{flex:1, resizeMode: 'contain'}} source={require('../../assets/logo.jpg')}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23201F',
  }
});

export default Header;
