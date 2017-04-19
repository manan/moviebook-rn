import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { sharedStyles, HEADER_HEIGHT } from '../utils/';

class Newsfeed extends Component {
  render() {
    return (
      <FlatList
        style={{ marginTop: HEADER_HEIGHT }}
        data={this.props.newsfeed}
        renderItem={({ item }) => <Text style={sharedStyles.fontStyle}>{item.movie_title}</Text>}
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
