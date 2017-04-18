import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView, FlatList, Image } from 'react-native';
import { sharedStyles, images } from '../utils';
import newsfeed from './newsfeed.json';
import { Header } from '../components';

class Newsfeed extends Component {

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(props.newsfeed);
  }

  renderHeader() {
    return (
      <Header>
        <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
      </Header>
    );
  }

  renderRow(post) {
    return (
      <Text style={sharedStyles.fontStyle}>
        {post.movie_title}
      </Text>
    )
  }

  render() {
    return (
      // <ListView
      //   style={{ flex: 1 }}
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      //   renderSectionHeader={this.renderHeader}
      //   enableEmptySections
      // />
      <FlatList
        data={newsfeed}
        renderItem={({ item }) => <Text>{item.movie_title} </Text>}
      />
    )
  }
}

const mapStateToProps = store => {
  console.log('called');
  console.log(store.posts.newsfeed);
  return {
    newsfeed: store.posts.newsfeed
  }
}

export default connect(mapStateToProps, {})(Newsfeed);
