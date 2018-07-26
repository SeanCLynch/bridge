import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ImagePath from '../assets/images/profile.jpeg';

import Tag from '../components/Tag'
import SocialMedia from '../components/SocialMedia'

const ProfileContainer = ({fellowName, fellowBio, imagePath, facebookHandle, linkedinHandle, instagramHandle}) =>
<View style={styles.container}>
  <View style={styles.ImageContainer}>
    <Image
      source={ImagePath}
      style={styles.image}
    />
    <Text style={styles.nameTitle}>Andre Gomes</Text>
  </View>
  <View style={styles.TagContainer}>
    <Tag />
    <Tag />
    <Tag />
    <Tag />
    <Tag />
    <Tag />
    <Tag />
  </View>
  <Text style={styles.content}>Cocoon is the catalyst for making dreams into innovation. We do this in two parts: as the educator and as the creator. Spanning from developing applications to personally shaping full stack teams to tackle a company’s needs, it is about bringing people from a span and mixture of backgrounds to work together on diverse projects. We create a new path for people to gain experience using real world knowledge. Cocoon’s second aspect is making ideas into a reality utilizing student insight and opinion.</Text>
  <SocialMedia
    linkedin = {linkedinHandle}
    facebook = {facebookHandle}
    instagram = {instagramHandle}
  />
</View>


const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  },
  ImageContainer: {
    alignItems:'center',
    marginTop: '25%',
  },
  TagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nameTitle: {
    fontSize: 20,
  },
  image: {
  },
  content: {
    marginTop: '5%',
    marginBottom: '5%',
  }
});

export default ProfileContainer;
