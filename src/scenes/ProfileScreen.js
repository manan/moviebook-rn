import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { Page, Profile } from '../components';
import { images } from '../utils';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={images.man_user}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  };

  render() {
    return (
      <Page>
        <Profile profile={{}} />
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default connect()(ProfileScreen)
