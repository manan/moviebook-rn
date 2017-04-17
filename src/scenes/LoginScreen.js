import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
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
import { loginUser, clearAuth } from '../actions';


class LoginScreen extends Component {
  state = { username: '', password: '', loading: false, buttonDisabled: true }

  componentDidUpdate() {
    this.setButtonState();
    this.setLoadingState();
    if (this.props.errors !== '') {
      this.showAlert();
    }
  }

  onGetHelpSigningInPressed() {
    console.log('Boiler plate function!');
  }

  onLogInButtonPressed() {
    this.props.clearAuth();
    this.setState({ loading: true })
    this.props.loginUser({ username: this.state.username, password: this.state.password });
  }

  onUsernameChanged(username) {
    this.setState({ username });
  }

  onPasswordChanged(password) {
    this.setState({ password });
  }

  /**
   * enables and disables button based on username+password length
   * does not change state unnecessarily
   */
  setButtonState() {
    const { username, password, buttonDisabled } = this.state;
    if ((password.length >= MIN_PASSWORD_LENGTH) && (username.length >= 1)) {
      if (buttonDisabled) { this.setState({ buttonDisabled: false }); }
    } else if (!buttonDisabled) { this.setState({ buttonDisabled: true }); }
  }

  /**
   * shows ActivityIndicator based on current state
   */
  setLoadingState() {
    const { token, errors } = this.props;
    if ((token !== '' || errors !== '') && this.state.loading) {
        this.setState({ loading: false });
    }
  }

  showAlert() {
    this.props.clearAuth();
    Alert.alert('Authentication failed', this.props.errors,
      [{ text: 'Try again', onPress: () => console.log('ok') }]
    )
  }

  // Render functions
  renderLogInButton() {
    const { loading, buttonDisabled } = this.state;
    if (loading) {
      return (
        <Button
          onPress={this.onLogInButtonPressed.bind(this)}
          disabled={buttonDisabled}
          style={{ height: BUTTON_HEIGHT }}
        >
          <ActivityIndicator size='small' />
        </Button>
      );
    }

    return (
      <Button
        onPress={this.onLogInButtonPressed.bind(this)}
        disabled={buttonDisabled}
        style={{ height: BUTTON_HEIGHT }}
      >
        <Text style={sharedStyles.buttonTextStyle}> Login </Text>
      </Button>
    );
  }

  render() {
    const { smallFontStyle } = sharedStyles;
    const { sideMargins } = styles;
    const { username, password } = this.state;

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
              <TouchableOpacity onPress={this.onGetHelpSigningInPressed.bind(this)}>
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
  return {
    isAuthenticated: store.auth.isAuthenticated,
    token: store.auth.token,
    errors: store.auth.errors
  }
}

export default connect(mapStateToProps, { loginUser, clearAuth })(LoginScreen);
