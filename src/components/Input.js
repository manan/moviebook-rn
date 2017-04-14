import React from 'react';
import { TextInput, View } from 'react-native';
import { colors } from '../utils';

const Input = (props) => {
  const { inputStyle, containerStyle } = styles;
  const {
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    style,
    height,
    autoCorrect = false,
    autoCapitalize = 'none'
  } = props;

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
}

const styles = {
  inputStyle: {
    color: colors.THEME_GRAY,
    paddingRight: 5,
    paddingLeft: 10,
    lineHeight: 23,
    flex: 1,
    borderRadius: 5,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    backgroundColor: colors.OFF_WHITE,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  }
}

export { Input };
