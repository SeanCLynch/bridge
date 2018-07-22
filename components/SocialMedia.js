import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import styled from "styled-components";

import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';

const SocialMedia = ({ linkedin, facebook, instagram }) =>
<View style={styles.container}>
  <Image style={styles.icon} source={facebookIcon} />
  <Image style={styles.icon} source={instagramIcon} />
  <Image style={styles.icon} source={linkedinIcon} />
</View>


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    margin: 20,
    width: 30,
    height: 30,
  },
});

export default SocialMedia;
