import React from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'
import { colors, images } from '../utils/'

const Header = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.THEME_BLACK} barStyle="light-content" />
      <View style={styles.containerStyle}>
        <Image style={{ flex: 1, resizeMode: 'contain' }} source={images.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME_BLACK,
  }
});

export { Header };
