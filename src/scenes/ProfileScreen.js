import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page, Profile } from '../components';
import { urls, params, getData } from '../utils';

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
    const { username, password, token } = this.props.auth;
    getData(this.requestProfileDetails, this.storeProfile.bind(this),
            { username, password, token },
            { id: this.props.navigation.state.params.id })

    setTimeout(() => this.props.navigation.goBack(), 15000)
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

  requestProfileDetails({ token, args }) {
    const requestParams = {
      method: 'GET',
      headers: { Authorization: params.token_request + token },
    }
    return fetch(urls.base_url + urls.search_by_ids + args.id + '/', requestParams) // eslint-disable-line
  }

  storeProfile(data) {
    const {
      id,
      first_name,
      last_name,
      username,
      followers,
      followings,
      bio,
      profile_picture,
      posts
    } = data[0]
    console.log(data[0])
    this.setState({
      id,
      first_name,
      last_name,
      username,
      friends: { followings, followers },
      bio,
      profile_picture,
      feed: posts
    })
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

    return {
      id,
      username,
      first_name,
      last_name,
      bio,
      profile_picture,
      friends,
      feed: posts.my_feed,
      isSelf: true,
      isFollowed: false
    }
  }

  let isFollowed = false
  for (const following of store.friends.followings) {
    if (following.user === profile_id) {
      isFollowed = true
    }
  }

  return {
    auth: store.auth,
    isSelf: false,
    isFollowed
  }
}

export default connect(mapStateToProps)(ProfileScreen)
