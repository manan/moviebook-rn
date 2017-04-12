import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../utils/'

const Header = ({ children }) => {
  return (
    <View>
      <StatusBar backgroundColor={ colors.THEME_BLACK } barStyle="light-content"/>
      <View style={styles.containerStyle}>
        { children }
      </View>
    </View>
  )
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
