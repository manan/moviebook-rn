import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Section, Page, Feed } from '../components';
import { images, sharedStyles } from '../utils';

class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.home}
          style={[sharedStyles.tabBarIconStyle, { tintColor }]}
        />
      )
  };

  render() {
    return (
      <Page>
        <Section>
          <Feed posts={this.props.newsfeed} />
        </Section>
      </Page>
    )
  }
}

const mapStateToProps = store => {
  const newsfeed = []
  for (const post of store.posts.newsfeed) {
    newsfeed.push({ ...post, key: post.id })
  }
  return { newsfeed }
}

export default connect(mapStateToProps)(HomeScreen);
