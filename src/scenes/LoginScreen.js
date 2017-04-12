import React, { Component } from 'react';
import { Text, View, Image, AppRegistry, StyleSheet } from 'react-native'
import { Header, Body, Button, Section } from '../components'
import { images, colors } from '../utils'


export default class LoginScreen extends Component {
  state = { text: 'Hello, World!' }

  componentWillMount(){
    this.setState({ text: 'Goodbye, World!' })
  }

  render(){
    const { fontStyle, buttonTextStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Image style={{ flex:1, resizeMode: 'contain' }} source={ images.logo }/>
        </Header>
        <Body>
          <Text style={ fontStyle }>
            {this.state.text}
          </Text>
          <Section style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 40 }}>
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

const styles = StyleSheet.create({
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Arial Hebrew',
  },
  buttonTextStyle: {
    flex: 1,
    alignSelf: 'center',
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
});
