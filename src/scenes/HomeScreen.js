import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Section, Page, Feed } from '../components'

class HomeScreen extends Component {

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Profile', { id: 1 }), 5000)
  }

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
