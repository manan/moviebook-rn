import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; // eslint-disable-line
import { sharedStyles, images } from '../utils/';
import { Section, Button, Feed } from '../components';

class Profile extends Component { // must pass profile and onProfilePress props

  getWidth() {
    return Dimensions.get('window').width
  }

  getHeight() {
    return Dimensions.get('window').height
  }

  render() {
    const {
      first_name,
      last_name,
      friends,
      bio,
      profile_picture,
      my_feed
    } = this.props.profile
    const { avatar } = images
    const {
      imageStyle,
      containerStyle,
      outerSectionOverride,
      blockStyle
    } = styles;
    const {
      simpleFontStyle,
      smallFontStyle,
      buttonTextStyle
    } = sharedStyles;

    return (
      <View style={[containerStyle, { width: this.getWidth() }]} >

        <Section style={[outerSectionOverride, { width: this.getWidth() }]} >

          <Section style={{ justifyContent: 'space-between', width: this.getWidth() }} >
            <Image style={imageStyle} source={{ uri: profile_picture }} defaultSource={avatar} />

            <Section style={{ flex: 1, flexDirection: 'column', marginLeft: 30, marginRight: 30 }}>
              <Section style={{ flex: 2 }}>
                <Section style={blockStyle}>
                  <Text style={[simpleFontStyle, { fontSize: 18 }]} >
                    {my_feed.length}
                  </Text>
                  <Text style={smallFontStyle}>
                    posts
                  </Text>
                </Section>

                <Section style={blockStyle}>
                  <Text style={[simpleFontStyle, { fontSize: 18 }]}>
                    {friends.followers.length}
                  </Text>
                  <Text style={smallFontStyle}>
                    followers
                  </Text>
                </Section>

                <Section style={blockStyle}>
                  <Text style={[simpleFontStyle, { fontSize: 18 }]} >
                    {friends.followings.length}
                  </Text>
                  <Text style={smallFontStyle}>
                    followings
                  </Text>
                </Section>
              </Section>

              <Section style={{ flex: 1 }}>
                <Button style={{ flex: 1 }}>
                  <Text style={[buttonTextStyle, { fontSize: 13 }]}>
                    Edit Profile
                  </Text>
                </Button>
              </Section>
            </Section>

          </Section>

          <Text style={[simpleFontStyle, { paddingTop: 10 }]}>
            {`${first_name} ${last_name}`}
          </Text>

          <Text style={smallFontStyle}>
            {bio}
          </Text>

        </Section>

        <View style={{ height: 1, width: this.getWidth(), backgroundColor: '#CDCDCD' }} />
        <Section style={{ flex: 1 }}>
          <Feed posts={my_feed} onProfilePress={this.props.onProfilePress} />
        </Section>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  blockStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  outerSectionOverride: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
  }
});

export { Profile };
