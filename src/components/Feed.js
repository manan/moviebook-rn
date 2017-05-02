import React from 'react';
import { FlatList } from 'react-native';
import { Post } from './Post';

const Feed = ({ posts, onUsernamePress }) => {
  // must pass posts and onUsernamePress props
  
  return (
    <FlatList
      data={posts}
      removeClippedSubviews={false}
      keyExtractor={(item, index) => item.id}  // eslint-disable-line
      renderItem={({ item }) => <Post post={item} onUsernamePress={onUsernamePress} />}
    />
  )
}

export { Feed }
