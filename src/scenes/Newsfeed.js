import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import newsfeed from './newsfeed.json';

class Newsfeed extends Component {
  render() {
    return (
      <FlatList
        style={{ marginTop: 65 }}
        data={newsfeed}
        renderItem={this.renderRow}
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
