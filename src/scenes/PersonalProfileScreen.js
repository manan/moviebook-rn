import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Page, Profile } from '../components';
import { images, sharedStyles } from '../utils';

class PersonalProfileScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.man_user}
          style={[sharedStyles.tabBarIconStyle, { tintColor }]}
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
