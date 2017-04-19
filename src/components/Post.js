import React, { Component } from 'react';
import ReactNative, { Text, View, StyleSheet, Dimensions } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; // eslint-disable-line
import { sharedStyles, images } from '../utils';
import { Section } from '../components';

class Post extends Component {
  state = { width: 0, height: 0 }

  componentDidMount() {
    ReactNative.Image.getSize(this.props.post.poster_url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height; // or something else
      const maxWidth = Dimensions.get('window').width;

      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      this.setState({ width: srcWidth * ratio, height: srcHeight * ratio });
    }, error => {
      console.log('error:', error);
    });
  }


  render() {
    const { post } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }}>
        <Section style={styles.sideMargins}>
          <Image
            style={{ width: 30, height: 30, borderRadius: 15 }}
            source={{ uri: post.profile_picture }}
            defaultSource={images.avatar}
          />
          <View
            style={{ justifyContent: 'space-between', alignItems: 'flex-start', paddingLeft: 15 }}
          >
            <Text style={sharedStyles.simpleFontStyle} numberOfLines={1}>
              {post.username}
            </Text>
            <Text style={sharedStyles.smallFontStyle} numberOfLines={1}>
              {post.movie_title}
            </Text>
          </View>
        </Section>

        <Section style={{ paddingTop: 5, paddingBottom: 10 }}>
          <Image
            style={{ flex: 1, width: this.state.width, height: this.state.height }}
            indicator={ProgressBar}
            source={{ uri: post.poster_url }}
            defaultSource={images.grey}
          />
        </Section>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 15,
    marginTop: 5,
  }
});

export { Post };
