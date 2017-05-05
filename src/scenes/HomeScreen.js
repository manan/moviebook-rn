import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Section, Page, Feed } from '../components'
import { images, sharedStyles } from '../utils'

class HomeScreen extends Component {
  static navigationOptions = {
		header: null,
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.home}
          style={[sharedStyles.tabBarIconStyle, { tintColor }]}
        />
      )
  }

  onUsernamePress(username, id) {
    console.log(username);
    this.props.navigation.navigate('Profile', { id })
  }

  render() {
    return (
      <Page>
        <Section>
          <Feed posts={this.props.newsfeed} onUsernamePress={this.onUsernamePress.bind(this)} />
        </Section>
      </Page>
    )
  }
}

const mapStateToProps = store => {
  return { newsfeed: store.posts.newsfeed }
}

export default connect(mapStateToProps)(HomeScreen);
