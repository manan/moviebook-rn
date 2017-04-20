import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, NAVIGATION_BAR_HEIGHT } from '../utils';

const NavBar = () => {
  return (
    <View style={styles.navBarStyle}>
      <Text>
        Nothing yet
      </Text>
    </View>
  )
}

let styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: '#870D2B',
    borderColor: colors.LIGHT_GREY,
    shadowColor: colors.DARK_GREY,
    shadowOffset: { width: 0, height: 3 },
    bottom: 0,
    top: null,
    height: NAVIGATION_BAR_HEIGHT
  }
});

export { NavBar }
