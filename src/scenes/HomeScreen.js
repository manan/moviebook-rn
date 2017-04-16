import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from 'react-native';
import { sharedStyles, images } from '../utils'
import {
  Header,
  Body,
  Section
} from '../components';

class HomeScreen extends Component {
  render() {
    const { sideMargins } = styles;

    return (
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Header>
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
          </Header>

          <Body>
            <Section style={[sideMargins, { marginTop: 40 }]}>
              <Text style={sharedStyles.fontStyle}>
                Hello, World!
              </Text>
            </Section>
          </Body>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
  }
});

export default connect()(HomeScreen);
