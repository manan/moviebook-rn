import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native'
import Header from '../components/Header'
import Body from '../components/Body'


export default class LoginScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Header />
        <Body>
          <Text style={styles.fontStyle}>
            Hello, World!
          </Text>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Arial Hebrew',
  }
});
