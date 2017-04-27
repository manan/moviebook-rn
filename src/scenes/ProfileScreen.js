import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Page, Button } from '../components';

class ProfileScreen extends Component {

  render() {
    return (
      <Page>
        <Button>
          <Text>
            Go Back
          </Text>
        </Button>
      </Page>
    )
  }
}

const mapStateToProps = store => {
  return store
}

export default connect(mapStateToProps)(ProfileScreen)
