import React from 'react';
import { View, Image } from 'react-native';
import { Header, Body } from '../components';
import { images } from '../utils';

const Page = ({ children }) => {
  return (
    <View style={{ flex: 1 }} >
      <Header>
        <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
      </Header>
      <Body>
        {children}
      </Body>
    </View>
  )
}

export { Page }
