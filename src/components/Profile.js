import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; // eslint-disable-line
import { sharedStyles, images } from '../utils/';
import { Section, Button } from '../components';

const Profile = ({ profile }) => {
  const { first_name, last_name, username, friends, bio, profile_picture, my_feed } = profile
  const { avatar } = images
  const { imageStyle, containerStyle, sectionOverride, outerSectionOverride, blockStyle } = styles;
  const { fontStyle, smallFontStyle, buttonTextStyle } = sharedStyles;

  const getWidth = () => Dimensions.get('window').width - 10 // -10 for 5 units margin each side

  return (
    <View style={[containerStyle, { width: getWidth() }]} >
      <Section style={[outerSectionOverride, { width: getWidth() }]} >
        <Section style={[sectionOverride, { width: getWidth() }]} >
          <Image style={imageStyle} source={{ uri: profile_picture }} defaultSource={avatar} />
          <Section style={{ flex: 1, flexDirection: 'column', marginLeft: 30, marginRight: 30 }}>
            <Section style={{ flex: 2 }}>
              <Section style={blockStyle}>
                <Text style={[fontStyle, { fontSize: 18 }]} >
                  {my_feed.length}
                </Text>
              </Section>
              <Section style={blockStyle}>
                <Text style={[fontStyle, { fontSize: 18 }]}>
                  {friends.followers.length}
                </Text>
              </Section>
              <Section style={blockStyle}>
                <Text style={[fontStyle, { fontSize: 18 }]} >
                  {friends.followings.length}
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
        <Text style={[fontStyle, { paddingTop: 10 }]}>
          {`${first_name} ${last_name}`}
        </Text>

        <Text style={smallFontStyle}>
          {bio}
        </Text>
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionOverride: {
    justifyContent: 'space-between',
  },
  blockStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  },
  containerStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
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
  }
});

export { Profile };
