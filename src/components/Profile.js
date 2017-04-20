import React from 'react';
import { View, Text } from 'react-native';
import { sharedStyles } from '../utils/';

const Profile = ({ profile }) => {
  console.log(profile);
  return (
    <View>
      <Text style={sharedStyles.fontStyle}>
        Hello, World!
      </Text>
    </View>
  )
}

export { Profile };
