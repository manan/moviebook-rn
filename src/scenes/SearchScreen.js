import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Header, Body } from '../components';
import { sharedStyles } from '../utils';

class SearchScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1 }} >
          <Header />
          <Body>
          <Text style={sharedStyles.fontStyle}>
            Goodbye, World!
          </Text>
          </Body>
        </View>
      )
    }
}

export default connect()(SearchScreen)
