import React, { Component } from 'react';
import { Header, Body, Button, Input, Section } from '../components/';
import { images, colors, sharedStyles } from '../utils/';
import { connect } from 'react-redux';
import { usernameChanged } from '../actions';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  AppRegistry
} from 'react-native';

class LoginScreen extends Component {
  state = { text: "Hello, World!", loading: false }

  componentDidMount() {
    console.log(this.props);
  }

  onLogInButtonPressed(){
    if (this.state.text === "Hello, World!"){
      this.setState({ text: "Goodbye World!" });
    } else {
      this.setState({ text: "Hello, World!" });
    }
  }

  // Render functions
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
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={ Keyboard.dismiss }>
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

            <Section style={ sideMargins }>
              <Input
                value = { this.state.username }
                placeholder = { 'username' }
                onChangeText = {username => this.setState({ username })}
                height = { 30 }
                 />
            </Section>

            <Section style={[ sideMargins, { marginTop: 40 } ]}>
              { this.renderLogInButton() }
            </Section>
          </Body>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20
  }
});

const mapStateToProps = store => {
  return { user: store.user };
}

export default connect(mapStateToProps, { usernameChanged })(LoginScreen);
