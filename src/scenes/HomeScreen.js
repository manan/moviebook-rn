import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Section, Header, Body, Feed } from '../components';
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

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

const mapStateToProps = store => {
  const newfeed = []
  for (const p of store.posts.newsfeed) {
    newfeed.push({ ...p, key: p.id })
  }
  return { newsfeed: newfeed, friends: store.friends }
}

export default connect(mapStateToProps, {})(HomeScreen);
