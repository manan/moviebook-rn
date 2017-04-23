import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, StyleSheet } from 'react-native';
import { Page, Section } from '../components';
import { images, sharedStyles } from '../utils';

class NotificationScreen extends Component {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Image
          source={images.notifications}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  };

  render() {
    return (
      <Page>
        <Section style={styles.sectionStyle}>
          <Text 
            style={[
              sharedStyles.smallFontStyle,
              { fontSize: 20, fontFamily: 'Arial Rounded MT Bold' }
            ]}
          >
            {'Notifications not yet implemented (expect by mid-May)'}
          </Text>
        </Section>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  sectionStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
  }
});

export default connect()(NotificationScreen)
