import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator, StyleSheet, AppRegistry } from 'react-native'
import { Header, Body, Button, Section } from '../components/'
import { images, colors, sharedStyles } from '../utils/'


export default class LoginScreen extends Component {
  state = { text: 'Goodbye, World!', loading: false }

  componentWillMount(){
    this.setState({ text: 'Hello, World!' });
  }

  onLogInButtonPressed(){
    if (this.state.text === 'Goodbye, World!') {
      this.setState({ text: 'Hello, World!' })
    } else {
      this.setState({ text: 'Goodbye, World!' });
    }
  }

  renderLogInButton(){
    if (this.state.loading){
      return (
        <Button onPress= { this.onLogInButtonPressed.bind(this) } style={{ height: 30 }}>
          <ActivityIndicator size='small'/>
        </Button>
      );
    }

    return (
      <Button onPress= { this.onLogInButtonPressed.bind(this) } style={{ height: 30 }}>
        <Text style={ sharedStyles.buttonTextStyle }> Log in </Text>
      </Button>
    );
  }

  render(){
    const { fontStyle, buttonTextStyle, boxSpinnerStyle } = sharedStyles;
    const { sideMargins } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={ images.logo }/>
        </Header>

        <Body>
          <Section style={[ sideMargins, { marginTop: 40 } ]}>
            <Text style={ fontStyle }>
              { this.state.text }
            </Text>
          </Section>

          <Section style={[ sideMargins, { marginTop: 40 } ]}>
            { this.renderLogInButton() }
          </Section>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20
  }
})
