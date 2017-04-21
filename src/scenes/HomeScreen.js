import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Section, Header, Body, Feed } from '../components';

class HomeScreen extends Component {
  render() {
    console.log(Feed);
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Body>
          <Section>
            <Feed posts={this.props.newsfeed} />
          </Section>
        </Body>
      </View>
    )
  }
}
const mapStateToProps = store => {
  const newfeed = []
  for (const p of store.posts.newsfeed) {
    newfeed.push({ ...p, key: p.id })
  }

  return { newsfeed: newfeed, friends: store.friends }
}

export default connect(mapStateToProps, {})(HomeScreen);
