import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { HEADER_HEIGHT } from '../utils/';
import { Post } from '../components';

class Newsfeed extends Component {
  render() {
    return (
      <FlatList
        style={{ marginTop: HEADER_HEIGHT }}
        data={this.props.newsfeed}
        renderItem={({ item }) => <Post post={item} />}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    newsfeed: store.posts.newsfeed
  }
}

export default connect(mapStateToProps, {})(Newsfeed);
