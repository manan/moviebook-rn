import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Section, Page, Feed } from '../components'

class HomeScreen extends Component {

  onProfilePress(username, id) {
    console.log(username)
    this.props.navigation.navigate('Profile', { id })
  }

  render() {
    return (
      <Page>
        <Section>
          <Feed posts={this.props.newsfeed} onProfilePress={this.onProfilePress.bind(this)} />
        </Section>
      </Page>
    )
  }
}

const mapStateToProps = store => {
  return { newsfeed: store.posts.newsfeed }
}

export default connect(mapStateToProps)(HomeScreen);
