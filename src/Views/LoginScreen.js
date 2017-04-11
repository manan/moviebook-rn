import React, { Component } from 'react';
import { Text, View, Image, AppRegistry, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Body from '../components/Body'


export default class LoginScreen extends Component {
  state = { text: 'Hello, World!' }

  componentWillMount(){
    this.setState({ text: 'Goodbye, World!' })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header>
          <Image style={{flex:1, resizeMode: 'contain'}} source={require('../../assets/logo.jpg')}/>
        </Header>
        <Body>
          <Text style={styles.fontStyle}>
            {this.state.text}
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
