import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page, Profile } from '../components';

class ProfileScreen extends Component {

  state = {
    id: -1,
    username: '',
    first_name: '',
    last_name: '',
    bio: 'placeholder',
    profile_picture: 'https://s3.ca-central-1.amazonaws.com/moviebook/default-5.jpg',
    friends: { followings: [], followers: [] },
    feed: [],
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.goBack(), 5000)
  }

  onProfilePress(username, id) {
    console.log(username)
    this.props.navigation.navigate('Profile', { id })
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
      feed
    } = this.getObjectWithDetails()
    const { isSelf, isFollowed } = this.props
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
        isSelf={isSelf}
        isFollowed={isFollowed}
        onUsernamePress={this.onProfilePress.bind(this)}
      />
      </Page>
    )
  }
}

const mapStateToProps = (store, props) => {
  const profile_id = props.navigation.state.params.id // id of the profile being displayed

  if (store.auth.id === profile_id) {
    const { friends, profile, posts, auth } = store
    const { bio, profile_picture } = profile
    const { id, username, first_name, last_name } = auth

    const feed = []
    for (const post of posts.my_feed) {
      feed.push({ ...post, key: post.id })
    }

    return {
      id,
      username,
      first_name,
      last_name,
      bio,
      profile_picture,
      friends,
      feed,
      isSelf: true,
      isFollowed: friends.followings.indexOf(profile_id) !== -1
    }
  }

  return {
    isSelf: false,
    isFollowed: store.friends.followings.indexOf(profile_id) !== -1
  }
}

export default connect(mapStateToProps)(ProfileScreen)
