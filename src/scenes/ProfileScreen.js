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
    const { first_name, last_name, username, friends, bio, profile_picture, my_feed } = this.props;
    return (
      <Page>
        <Profile
        profile={{ first_name, last_name, username, friends, bio, profile_picture, my_feed }}
        />
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

const mapStateToProps = store => {
  return {
    friends: store.friends,
    bio: store.profile.bio,
    profile_picture: store.profile.profile_picture,
    username: store.auth.username,
    first_name: store.auth.first_name,
    last_name: store.auth.last_name,
    my_feed: store.posts.my_feed
  }
}

export default connect(mapStateToProps)(ProfileScreen)
