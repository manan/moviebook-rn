import React, { Component } from 'react';
import { Text, View, Image, AppRegistry, StyleSheet } from 'react-native'
import { Header, Body } from '../components'
import { images } from '../utils'


export default class LoginScreen extends Component {
  state = { text: 'Hello, World!' }

  componentWillMount(){
    this.setState({ text: 'Goodbye, World!' })
  }

  render(){
    const { fontStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Image style={{flex:1, resizeMode: 'contain'}} source={images.logo}/>
        </Header>
        <Body>
          <Text style={fontStyle}>
            {this.state.text}
          </Text>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Arial Hebrew',
  }
});
