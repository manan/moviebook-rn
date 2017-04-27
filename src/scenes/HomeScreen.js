import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Section, Page, Feed } from '../components';
import { images } from '../utils';

class HomeScreen extends Component {
  static navigationOptionsOld = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={images.home}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.home}
          style={[styles.icon, { tintColor }]}
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

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

const mapStateToProps = store => {
  const newsfeed = []
  for (const p of store.posts.newsfeed) {
    newsfeed.push({ ...p, key: p.id })
  }
  return { newsfeed, friends: store.friends }
}

export default connect(mapStateToProps, {})(HomeScreen);
