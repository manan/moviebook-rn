import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, StyleSheet } from 'react-native';
import { Page, Section } from '../components';
import { images, sharedStyles } from '../utils';

class SearchScreen extends Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={images.search}
          style={[sharedStyles.tabBarIconStyle, { tintColor }]}
        />
      )
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
            {'Search not yet implemented (expect by end of April)'}
          </Text>
        </Section>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25
  }
});

export default connect()(SearchScreen)
