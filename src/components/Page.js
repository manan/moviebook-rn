import React from 'react';
import { View } from 'react-native';
import { Header, Body } from '../components';

const Page = ({ children }) => {
  return (
    <View style={{ flex: 1 }} >
      <Header />
      <Body>
        {children}
      </Body>
    </View>
  )
}

export { Page }
