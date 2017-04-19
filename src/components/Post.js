import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; // eslint-disable-line
import { sharedStyles } from '../utils';
import { Section } from '../components';

const Post = ({ post }) => {
  return (
    <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }}>
      <Section style={styles.sideMargins}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 15 }}
          indicator={ProgressBar}
          source={{ uri: post.profile_picture }}
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
    </View>
  )
}

const styles = StyleSheet.create({
  sideMargins: {
    marginLeft: 15,
    marginTop: 5,
  }
});

export { Post };
