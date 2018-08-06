import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ImagePath from '../assets/images/profile.jpeg'

import Hand from '../components/Hand'

import Tag from '../components/Tag'
import SocialMedia from '../components/SocialMedia'

const ProfileContainer = ({fellowName, fellowBio, imagePath, facebookHandle, linkedinHandle, instagramHandle, email}) =>
<View style={styles.container}>
  <View style={styles.TopContainer}>
    <View styles={styles.ImageContainer}>
      <Image
        source={ImagePath}
        style={styles.image}
      />
      <SocialMedia
        linkedin = {linkedinHandle}
        facebook = {facebookHandle}
        instagram = {instagramHandle}
        mail = {email}
      />
    </View>
    <View styles={styles.BioContainer}>
      <Text style={styles.title}>ANDRE GOMES</Text>
      <Text style={styles.content}>Product Manager</Text>
      <Text style={styles.content}>Leverage</Text>
      <Text style={styles.content}>Baltimore</Text>
      <Text style={styles.content}>Class of 2020</Text>
      <Text style={styles.content}>Columbia University</Text>
    </View>
  </View>
  <View>
    <Text style={styles.title}>PROFILE</Text>
    <Text style={styles.content}>Cocoon is the catalyst for making dreams into innovation. We do this in two parts: as the educator and as the creator. Spanning from developing applications to personally shaping full stack teams to tackle a company’s needs, it is about bringing people from a span and mixture of backgrounds to work together on diverse projects. We create a new path for people to gain experience using real world knowledge. Cocoon’s second aspect is making ideas into a reality utilizing student insight and opinion.</Text>
  </View>
  <View>
    <Text style={styles.title}>NUGGET</Text>
    <Text  style={styles.content}>"Kings, presidents, voting" - David Clark</Text>
  </View>
  <Hand />
</View>


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  TopContainer: {
    width: '90%',
    marginTop: '25%',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  BioContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nameTitle: {
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: '3%',
  },
  title: {
    fontSize: 15,
    letterSpacing: 1.2,
  },
  content: {
    marginTop: '5%',
    marginBottom: '5%',
    fontWeight: '100',
    color: 'grey',
  }
});

export default ProfileContainer;
