import React from 'react'
import { View, StyleSheet } from 'react-native'

const Body = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  }
})

export default Body;
