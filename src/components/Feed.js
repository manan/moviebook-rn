import React from 'react';
import { FlatList } from 'react-native';
import { Post } from './Post';

const Feed = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
    />
  )
}

export { Feed }
