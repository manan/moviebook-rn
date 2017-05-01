import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Page, Profile } from '../components';
import { sharedStyles, images } from '../utils';

class ProfileScreen extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.home}
          style={[sharedStyles.tabBarIconStyle, { tintColor }]}
        />
      )
  };

  state = {
    id: -1,
    friends: { followings: [], followers: [] },
    bio: 'placeholder',
    profile_picture: 'https://s3.ca-central-1.amazonaws.com/moviebook/default-5.jpg',
    username: '',
    first_name: '',
    last_name: '',
    my_feed: '',
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.goBack(), 10000)
  }

  getObjectWithDetails() {
    if (this.props.isSelf) {
      return this.props
    }
    return this.state
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
      my_feed
    } = this.getObjectWithDetails()
    const { isSelf } = this.props
    return (
      <Page>
        <Profile
          profile={{
            id,
            first_name,
            last_name,
            username,
            friends,
            bio,
            profile_picture,
            my_feed,
            isSelf
          }}
        />
      </Page>
    )
  }
}

const mapStateToProps = (store, props) => {
  console.log(props)
  if (store.auth.id === props.navigation.state.params.id) {
    const { friends, profile, posts, auth } = store
    const { bio, profile_picture } = profile
    const { id, username, first_name, last_name } = auth

    const my_feed = []
    for (const post of posts.my_feed) {
      my_feed.push({ ...post, key: post.id })
    }

    return {
      id,
      friends,
      bio,
      profile_picture,
      username,
      first_name,
      last_name,
      my_feed,
      isSelf: true
    }
  }
  return {
    isSelf: false
  }
}

export default connect(mapStateToProps)(ProfileScreen)
