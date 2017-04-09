import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native'
import Header from './src/components/Header'

export default class Moviebook extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.bodyContainer}>
          <Text style={styles.fontStyle}>
            Hello, World!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#CD0034'
  },
  bodyContainer: {
    flex: 7,
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  },
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Arial Hebrew',
  }
});

AppRegistry.registerComponent('Moviebook', () => Moviebook)
