import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { colors } from '../utils';
import Newsfeed from './Newsfeed';

class HomeScreen extends Component {
  render() {
    return (
      <Newsfeed style={styles.containerStyle} />
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    marginTop: 65
  }
});

const mapStateToProps = store => {
  return {
    newsfeed: store.posts.newsfeed,
    friends: store.friends
  }
}

export default connect(mapStateToProps, {})(HomeScreen);
