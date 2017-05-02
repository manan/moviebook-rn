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

  onProfilePress(username, id) {
    console.log(username)
    console.log(id)
  }

  render() {
    const {
      id,
      first_name,
      last_name,
      username,
      friends,
      bio,
      profile_picture,
      feed
    } = this.props;

    return (
      <Page>
        <Profile
          id={id}
          username={username}
          first_name={first_name}
          last_name={last_name}
          bio={bio}
          profile_picture={profile_picture}
          followings={friends.followings}
          followers={friends.followers}
          feed={feed}
          isSelf
          onUsernamePress={this.onProfilePress.bind(this)}
        />
      </Page>
    )
  }
}

const mapStateToProps = store => {
  const { friends, profile, posts, auth } = store
  const { bio, profile_picture } = profile
  const { id, username, first_name, last_name } = auth

  return { id, friends, bio, profile_picture, username, first_name, last_name, feed: posts.my_feed }
}

export default connect(mapStateToProps)(PersonalProfileScreen)
