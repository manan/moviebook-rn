import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator, StyleSheet, AppRegistry } from 'react-native';
import { Header, Body, Button, Section } from '../components/';
import { images, colors, sharedStyles } from '../utils/';
import { connect } from 'react-redux';

class LoginScreen extends Component {

  componentDidMount(){
    console.log("Here's the props:");
    console.log(this.props);
  }

  onLogInButtonPressed(){
    console.log('Goodbye, World!');
  }

  renderLogInButton(){
    // if (this.state.loading){
    //   return (
    //     <Button onPress= { this.onLogInButtonPressed.bind(this) } style={{ height: 30 }}>
    //       <ActivityIndicator size='small'/>
    //     </Button>
    //   );
    // }

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
              Hello, World!
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
});

const mapStateToProps = state => {
  console.log("Here's the state:");
  console.log(state);
  return { user: state.user };
}

export default connect(mapStateToProps)(LoginScreen);
