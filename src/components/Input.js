import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { inputStyle, containerStyle } = styles;
  const { value, onChangeText, placeholder, secureTextEntry,
    style, height, autoCorrect = false, autoCapitalize = 'none' } = props;

  return (
    <View style={[ containerStyle, { height: height } ]}>
      <TextInput
        secureTextEntry={ secureTextEntry }
        placeholder={ placeholder }
        autoCorrect={ autoCorrect }
        style={[ inputStyle, style ]}
        value={ value }
        onChangeText={ onChangeText }
        autoCapitalize = { autoCapitalize }
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 1,
    borderRadius: 5,
    borderColor: '#CDCDCD',
    borderWidth: 1
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  }
};

export { Input };
