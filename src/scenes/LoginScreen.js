import React, { Component } from 'react';
import { Text, View, Image, AppRegistry } from 'react-native'
import { Header, Body, Button, Section } from '../components/'
import { images, colors, sharedStyles } from '../utils/'


export default class LoginScreen extends Component {
  state = { text: 'Hello, World!' }

  componentWillMount(){
    this.setState({ text: 'Goodbye, World!' })
  }

  render(){
    const { fontStyle, buttonTextStyle, boxSpinnerStyle } = sharedStyles
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={ images.logo }/>
        </Header>

        <Body>
          <Section style={{ marginLeft: 100, marginRight: 100, marginTop: 40 }}>
            <Button style={{ height: 30 }}>
              <Text style={ buttonTextStyle }> Log in </Text>
            </Button>
          </Section>
        </Body>
      </View>
    );
  }
}
