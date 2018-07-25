import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ImagePath from '../assets/images/profile.jpeg';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  randomPic(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fellow of the Day</Text>
        <Image
          source={ImagePath}
          style={styles.image}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: '20%',

  },
  title:{
    fontSize: 20,
  }
});
