import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { images } from '../utils';
import {
  Header,
  Body,
  Section
} from '../components';
import Newsfeed from './Newsfeed';

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
            <Section style={[sideMargins, { marginTop: 40 }]} >
              <Newsfeed />
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

const mapStateToProps = store => {
  return {
    newsfeed: store.posts.newsfeed,
    friends: store.friends
  }
}

export default connect(mapStateToProps, {})(HomeScreen);
