import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Header, Body, Profile } from '../components';

class UserProfile extends Component {
    render() {
      return (
        <View style={{ flex: 1 }} >
          <Header />
          <Body>
            <Profile profile={{}} />
          </Body>
        </View>
      )
    }
}

export default connect()(UserProfile)
