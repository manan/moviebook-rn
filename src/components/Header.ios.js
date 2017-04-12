import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../utils/'

const Header = ({ children }) => {
  const { THEME_BLACK } = colors
  return (
    <View>
      <StatusBar backgroundColor={ THEME_BLACK } barStyle="light-content"/>
      <View style={{ height: 10, backgroundColor: THEME_BLACK }}/>
      <View style={ styles.containerStyle }>
        { children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME_BLACK
  }
});

export { Header }
