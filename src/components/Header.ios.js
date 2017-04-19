import React from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'
import { colors, images } from '../utils/'

const Header = () => {
  const { THEME_BLACK } = colors
  return (
    <View>
      <StatusBar backgroundColor={THEME_BLACK} barStyle="light-content" />
      <View style={{ height: 10, backgroundColor: THEME_BLACK }} />
      <View style={styles.containerStyle}>
        <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME_BLACK
  }
});

export { Header };
