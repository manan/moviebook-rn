import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={[ styles.containerStyle, props.style ]}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#2F201F'
  }
};

export { Section };
