import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.fontStyle}> Moviebook </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Arial Hebrew',
    fontSize: 40,
  }
})
