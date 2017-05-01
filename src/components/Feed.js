import React from 'react';
import { FlatList } from 'react-native';
import { Post } from './Post';

const Feed = ({ posts, onProfilePress }) => { // must pass posts and onProfilePress props
  return (
    <FlatList
      data={posts}
      removeClippedSubviews={false}
      renderItem={({ item }) => <Post post={item} onProfilePress={onProfilePress} />}
    />
  )
}

export { Feed }
