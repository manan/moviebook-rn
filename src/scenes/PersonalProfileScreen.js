import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { Page, Profile } from '../components';
import { images } from '../utils';

class PersonalProfileScreen extends Component {
  static navigationOptionsOld = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={images.man_user}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.man_user}
          style={[styles.icon, { tintColor }]}
        />
      )
  };

  render() {
    const {
      id,
      first_name,
      last_name,
      username,
      friends,
      bio,
      profile_picture,
      my_feed
    } = this.props;

    return (
      <Page>
        <Profile
          profile={{ id, first_name, last_name, username, friends, bio, profile_picture, my_feed }}
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
  const { friends, profile, posts, auth } = store
  const { bio, profile_picture } = profile
  const { id, username, first_name, last_name } = auth

  const my_feed = []
  for (const post of posts.my_feed) {
    my_feed.push({ ...post, key: post.id })
  }

  return { id, friends, bio, profile_picture, username, first_name, last_name, my_feed }
}

export default connect(mapStateToProps)(PersonalProfileScreen)
