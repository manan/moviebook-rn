import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { images, colors, NAVIGATION_BAR_HEIGHT } from '../utils';

const NavBar = () => {
  const { navBarStyle, touchableStyle } = styles;
  return (
    <View style={navBarStyle}>
      <TouchableOpacity style={touchableStyle} >
        <Image style={{ width: 20, height: 20 }} source={images.home} />
      </TouchableOpacity>

      <TouchableOpacity style={touchableStyle}>
        <Image style={{ width: 20, height: 20 }} source={images.search} />
      </TouchableOpacity>

      <TouchableOpacity style={touchableStyle}>
        <Image style={{ width: 25, height: 25 }} source={images.add} />
      </TouchableOpacity>

      <TouchableOpacity style={touchableStyle} >
        <Image style={{ width: 20, height: 20 }} source={images.notifications} />
      </TouchableOpacity>

      <TouchableOpacity style={touchableStyle} >
        <Image style={{ width: 20, height: 20 }} source={images.man_user} />
      </TouchableOpacity>
    </View>
  )
}

let styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: colors.THEME_RED,
    borderColor: colors.LIGHT_GREY,
    bottom: 0,
    top: null,
    height: NAVIGATION_BAR_HEIGHT,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  touchableStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { NavBar }
