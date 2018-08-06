import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ThumbUp from '../assets/images/thumb_up.png'

const Hand = ({}) =>
<View style={styles.container}>
  <View style={styles.heading}>
    <Image
      style={styles.image}
      source={ThumbUp} />
    <Text>Strengths</Text>
  </View>
  <View>
    <Text>My strength is....</Text>
  </View>
</View>

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'column',
  },
  heading: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default Hand;
