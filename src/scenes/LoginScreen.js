import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';

import {
  images,
  colors,
  sharedStyles,
  BUTTON_HEIGHT,
  MIN_PASSWORD_LENGTH
} from '../utils/';
import { Header, Body, Button, Input, Section } from '../components/';
import { usernameChanged, passwordChanged, loginUser } from '../actions';


class LoginScreen extends Component {
  state = { loading: false, buttonDisabled: false }

  onLogInButtonPressed() {
    console.log('log in');
    this.props.loginUser({ username: this.props.username, password: this.props.password });
  }

  onUsernameChanged(username) {
    this.props.usernameChanged(username); // Action dispatched
  }

  onPasswordChanged(password) {
    this.props.passwordChanged(password); // Action dispatched
  }

  onGetHelpSigningInPressed() {
    console.log('Boiler plate function!');
  }

  // Render functions
  renderLogInButton() {
    if (this.state.loading) {
      return (
        <Button
        onPress={this.onLogInButtonPressed.bind(this)}
        disabled={this.props.disabled}
        style={{ height: BUTTON_HEIGHT }}
        >
          <ActivityIndicator size='small' />
        </Button>
      );
    }

    return (
      <Button
      onPress={this.onLogInButtonPressed.bind(this)}
      disabled={this.props.disabled}
      style={{ height: BUTTON_HEIGHT }}
      >
        <Text style={sharedStyles.buttonTextStyle}> Login </Text>
      </Button>
    );
  }

  render() {
    const { smallFontStyle } = sharedStyles;
    const { sideMargins } = styles;
    const { username, password } = this.props;

    return (
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Header>
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
          </Header>

          <Body>
            <Section style={[sideMargins, { marginTop: 40 }]}>
              <Input
                value={username}
                placeholder={'username'}
                onChangeText={this.onUsernameChanged.bind(this)}
                height={BUTTON_HEIGHT}
              />
            </Section>

            <Section style={sideMargins}>
              <Input
                secureTextEntry
                value={password}
                placeholder={'password'}
                onChangeText={this.onPasswordChanged.bind(this)}
                height={BUTTON_HEIGHT}
              />
            </Section>

            <Section style={[sideMargins, { marginTop: 15 }]}>
              {this.renderLogInButton()}
            </Section>

            <Section style={[sideMargins, { marginTop: 15, flexDirection: 'column' }]}>
              <Text style={smallFontStyle}>
                Forgot your login details?
              </Text>
              <TouchableOpacity>
                <Text style={[smallFontStyle, { color: colors.THEME_RED }]}>
                  Get help signing in.
                </Text>
              </TouchableOpacity>
            </Section>
          </Body>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
  }
});

const mapStateToProps = store => {
  console.log(store);
  const { username, password } = store.user;
  return {
    username,
    password,
    disabled: !(password.length >= MIN_PASSWORD_LENGTH) && (username.length >= 1)
  }
}

export default connect(mapStateToProps, {
  usernameChanged, passwordChanged, loginUser
})(LoginScreen);
