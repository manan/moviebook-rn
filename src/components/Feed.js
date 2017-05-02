import React from 'react';
import { FlatList } from 'react-native';
import { Post } from './Post';

const Feed = ({ posts, onUsernamePress }) => {
  // must pass posts and onUsernamePress props

  const items = []
  for (const post of posts) {
    items.push({ ...post, key: post.id })
  }

  return (
    <FlatList
      data={items}
      removeClippedSubviews={false}
      renderItem={({ item }) => <Post post={item} onUsernamePress={onUsernamePress} />}
    />
  )
}

export { Feed }
