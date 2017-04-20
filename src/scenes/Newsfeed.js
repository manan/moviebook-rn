import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { Post, Section, Header, Body } from '../components';

class Newsfeed extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Body>
          <Section>
            <FlatList
              data={this.props.newsfeed}
              renderItem={({ item }) => <Post post={item} />}
            />
          </Section>
        </Body>
      </View>
    )
  }
}

const mapStateToProps = store => {
  return {
    newsfeed: store.posts.newsfeed
  }
}

export default connect(mapStateToProps, {})(Newsfeed);
