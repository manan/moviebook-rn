import React, { Component } from 'react';
import { Text, View, Image, AppRegistry, StyleSheet } from 'react-native'
import { Header, Body, Button, Section } from '../components'
import { images, colors, sharedStyles } from '../utils'


export default class LoginScreen extends Component {
  state = { text: 'Hello, World!' }

  componentWillMount(){
    this.setState({ text: 'Goodbye, World!' })
  }

  render(){
    const { fontStyle, buttonTextStyle } = sharedStyles
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Image style={{ flex:1, resizeMode: 'contain' }} source={ images.logo }/>
        </Header>
        <Body>
          <Text style={[ fontStyle, { fontSize: 20 } ]}>
            { this.state.text }
          </Text>
          <Section style={{ marginLeft: 100, marginRight: 100, marginTop: 40 }}>
            <Button>
              <Text style={ buttonTextStyle }>
                Log in
              </Text>
            </Button>
          </Section>
        </Body>
      </View>
    );
  }
}
