import React, { Component } from 'react';
import { connect } from 'react-redux';
import Newsfeed from './Newsfeed';

class HomeScreen extends Component {
  render() {
    return (
      <Newsfeed />
    )
  }
}
const mapStateToProps = store => {
  return {
    newsfeed: store.posts.newsfeed,
    friends: store.friends
  }
}

export default connect(mapStateToProps, {})(HomeScreen);
