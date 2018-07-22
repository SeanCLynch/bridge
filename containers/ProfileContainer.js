import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ImagePath from '../assets/images/profile.jpeg';

import SocialMedia from '../components/SocialMedia'

const ProfileContainer = ({fellowName, fellowBio, imagePath, facebookHandle, linkedinHandle, instagramHandle}) =>
<View style={styles.container}>
  <Image
    source={ImagePath}
    style={styles.image}
   />
  <Text style={styles.nameTitle}>Andre Gomes</Text>
  <Text>Cocoon is the catalyst for making dreams into innovation. We do this in two parts: as the educator and as the creator. Spanning from developing applications to personally shaping full stack teams to tackle a company’s needs, it is about bringing people from a span and mixture of backgrounds to work together on diverse projects. We create a new path for people to gain experience using real world knowledge. Cocoon’s second aspect is making ideas into a reality utilizing student insight and opinion.</Text>
  <SocialMedia
    linkedin = {"https://www.instagram.com/_blasian_boy/"}
    facebook = {"https://www.instagram.com/_blasian_boy/"}
    instagram = {"https://www.instagram.com/_blasian_boy/"}
  />
</View>


const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop: '25%',
  },
  nameTitle: {
    fontSize: 20,
  },
  image: {
    borderRadius: 100,
  },
});

export default ProfileContainer;
